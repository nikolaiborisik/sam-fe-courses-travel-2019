//----------------------------------------pagination--------------------------------

//count number of pages, create buttons for pages
import {limit} from "./config";
import {getArticles} from "./services";
import {onGetInfo} from "./getInfo";
import {currentCategory} from "./chooseCategory";

export let currentPage: number = 1;
let currentNumberOfPages: number;
let numberOfArticles: number;

let createButttonPageTemplate = (value: number) => {
    return value===1? `<li><button class="btn btn_sm pagination-nav-btn btn-activePage" value="${value}">${value}</button></li>`: `<li><button class="btn btn_sm pagination-nav-btn" value="${value}">${value}</button></li>`
}

export function numberOfPages(){
    getArticles(currentCategory).then((response: any)=>{
        numberOfArticles = response.data.length;
        console.log(`setNum=${numberOfArticles}`);
        let paginationList = document.querySelector('.pagination__list');
        while(paginationList.firstChild){
            paginationList.removeChild(paginationList.firstChild);
        };
        currentNumberOfPages = Math.ceil(numberOfArticles/limit);
        console.log(`currentNumberOfPages=${currentNumberOfPages}`);

        for(let i = 1; i <= currentNumberOfPages; ++i){ //create buttons
            let articleTemplateStr: string = createButttonPageTemplate(i);
            paginationList.insertAdjacentHTML('beforeend', articleTemplateStr);
        }

        const pageButtons: NodeList = document.querySelectorAll('.pagination-nav-btn');
        pageButtons.forEach(function(elem: HTMLButtonElement){
            elem.addEventListener('click', pagination);
        })

        const nextPrevButtons: NodeList = document.querySelectorAll('.prev-btn, .next-btn');
        nextPrevButtons.forEach(function(elem: HTMLButtonElement){
            elem.addEventListener('click', pagination);
        })
    })
}

//change current page, get articles from current page
function pagination(e: Event){
    e.preventDefault();
    e.stopPropagation();
    const clickedBtn = e.target as HTMLButtonElement;
    const pageButtons: NodeList = document.querySelectorAll('.pagination-nav-btn');
    pageButtons.forEach(function(elem: any){
        elem.classList.remove('btn-activePage');
    })

    console.log(currentNumberOfPages)

    if(clickedBtn.classList.contains('prev-btn')){
        if(currentPage > 1){
            currentPage -= 1;
        }
        pageButtons.forEach((btn: HTMLButtonElement) => {
            if(+btn.value === currentPage){
                btn.classList.add('btn-activePage');
            }
        })

    } else if(clickedBtn.classList.contains('next-btn')) {
        if(currentPage < currentNumberOfPages){
            currentPage += 1;
        }
        pageButtons.forEach((btn: HTMLButtonElement) => {
            if(+btn.value === currentPage){
                btn.classList.add('btn-activePage');
            }
        })
    } else {
        currentPage = Number(clickedBtn.value);
        clickedBtn.classList.add('btn-activePage');
    }
    
    onGetInfo();
    window.scrollTo(0, 0);
}

export function removeCurrentPage() {
    currentPage = 0;
}