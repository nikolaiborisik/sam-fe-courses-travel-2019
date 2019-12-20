import {getInfo} from "./services";
import {currentPage} from "./pagination";
import {currentCategory} from "./chooseCategory";
import {onRemoveArticle} from "./removeArticles";

export function onGetInfo() {      //gets info from json-server
    clearArticles();
    getInfo(currentPage, currentCategory).then(function(response:any) {
        updateInfo(response.data);
        const readMoreButtons: any = document.querySelectorAll('.readmore-btn');
        readMoreButtons.forEach(function(elem: any){
            elem.addEventListener('click', showArticleContent);
        })
        const removeArticleButtons: any = document.querySelectorAll('.delete-article-btn');
        removeArticleButtons.forEach(function(elem: any){
            elem.addEventListener('click', onRemoveArticle);
        })
    });

}

function showArticleContent(e: any) {

}

function updateInfo(data:any){
    let createArticleTemplate = (id: number, title: string, shortDescription: string, image: string, category?: string) => {
        return `<div class="card card_vertical" id='${id}'>
        <div class="card__image-block">
            <img src='${image? image : ''}' alt="image">
        </div>
        <div class="card__text-content">
            <button class='btn delete-article-btn'><i class="fas fa-trash-alt"></i></button>
            <span class="card__category">${category ? category : 'unknown'}</span>
            <h2 class="card__header">${title}</h2>
            <p class="card__short-description">${shortDescription}</p>
            <div class="actions-block card__actions-block">
                <button class="btn readmore-btn actions-block__readmore-btn">Readmore</button>
                <div class="share-block actions-block__share-block">
                    <button class="btn share-btn share-block__share-btn">share</button>
                    <ul class="list socials-list share-block__socials-list">
                        <li><button class="btn social-btn share-block__social-btn"><i class="fab fa-facebook-f"></i></button></li>
                        <li><button class="btn social-btn share-block__social-btn"><i class="fab fa-twitter"></i></button></li>
                        <li><button class="btn social-btn share-block__social-btn"><i class="fab fa-instagram"></i></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    }
    let articleContainer = document.querySelector('.cards-container');
    for (let i=0; i<data.length; i++) {
        let articleTemplateStr: string = createArticleTemplate(data[i].id, data[i].title, data[i].shortDescription, data[i].image, data[i].category);
        articleContainer.insertAdjacentHTML('beforeend', articleTemplateStr);
    }
}

function clearArticles() {
    let articleContainer = document.querySelector('.cards-container');
    while(articleContainer.firstChild){
        articleContainer.removeChild(articleContainer.firstChild);
    };
    console.log('clearArticles is work');
}
