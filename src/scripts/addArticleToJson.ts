import {postArticle} from "./services";
import {getInfo} from "./allFunctions";

//--------------------Add articles-------------------------
const getArticleButton = document.querySelector('#getArticle');
getArticleButton.addEventListener('click', onPostArticle);

const inputArticleTitle = document.querySelector<HTMLInputElement>('.article-title');
const inputArticleShortDescription: any = document.querySelector('.article-shortDescription');
const inputArticleContent: any = document.querySelector('.article-content');

function onPostArticle(){
    postArticle({
        title: inputArticleTitle.value,
        shortDescription: inputArticleShortDescription.value,
        content: inputArticleContent.value
    }).then(()=>{
        inputArticleTitle.value = '';
        inputArticleShortDescription.value = '';
        inputArticleContent.value = '';
        getInfo();
    })
}


