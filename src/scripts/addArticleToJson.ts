import {postArticle} from "./services";
import {onGetInfo} from "./getInfo";
import {numberOfPages, setCurrentPage} from "./pagination";

const inputArticleTitle = document.querySelector<HTMLInputElement>('.article-title');
const inputArticleShortDescription: HTMLInputElement = document.querySelector('.article-shortDescription');
const inputArticleContent: HTMLInputElement = document.querySelector('.article-content');
const inputArticleCategory: HTMLInputElement = document.querySelector('.article-category');

const getArticleButton = document.querySelector('#getArticle');
function onPostArticle(){
    postArticle({
        title: inputArticleTitle.value,
        shortDescription: inputArticleShortDescription.value,
        content: inputArticleContent.value,
        category: inputArticleCategory.value
    }).then(()=>{
        inputArticleTitle.value = '';
        inputArticleShortDescription.value = '';
        inputArticleContent.value = '';
        inputArticleCategory.value = '0';
        setCurrentPage(1);
        onGetInfo();
        numberOfPages();
    })
}
getArticleButton.addEventListener('click', onPostArticle);


