import {postArticle} from "./services";
import {onGetInfo} from "./getInfo";
import {numberOfPages} from "./pagination";

const inputArticleTitle = document.querySelector<HTMLInputElement>('.article-title');
const inputArticleShortDescription: any = document.querySelector('.article-shortDescription');
const inputArticleContent: any = document.querySelector('.article-content');

const getArticleButton = document.querySelector('#getArticle');
function onPostArticle(){
    postArticle({
        title: inputArticleTitle.value,
        shortDescription: inputArticleShortDescription.value,
        content: inputArticleContent.value
    }).then(()=>{
        inputArticleTitle.value = '';
        inputArticleShortDescription.value = '';
        inputArticleContent.value = '';
        onGetInfo();
        numberOfPages();
    })
}
getArticleButton.addEventListener('click', onPostArticle);


