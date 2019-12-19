import {ArticleModel} from "../models/ArticleModel";

const axios = require('axios');
//--------------------Add article from form to json-------------------------

const getArticleButton = document.querySelector('#getArticle');
const inputArticleTitle = document.querySelector<HTMLInputElement>('.article-title');
const inputArticleShortDescription = document.querySelector<HTMLInputElement>('.article-shortDescription');
const inputArticleContent = document.querySelector<HTMLInputElement>('.article-content');

function postArticle(){
    let newArticle: ArticleModel = {
        title: inputArticleTitle.value,
        shortDescription: inputArticleShortDescription.value,
        content: inputArticleContent.value
    };
    axios.post("http://localhost:3000/articles", newArticle).then(function (response: any) {
        inputArticleTitle.value = '';
        inputArticleShortDescription.value = '';
        inputArticleContent.value = '';
    });
}
getArticleButton.addEventListener('click', postArticle);
