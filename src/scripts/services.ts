import { ArticleModel } from "../models/ArticleModel";
import {postArticle} from "./addArticleToJson";

const baseApiURL = "http://localhost:3000/articles";
const limit: number = 3;
let currentUrl: string = "http://localhost:3000/articles";
let currentPage: number = 1;
let currentNumberOfPages: number = 7;
let currentCategory: string;
let currentTags: string[];


let getInfoButton = document.getElementById("but");

function updateInfo(data:any){
    let createArticleTemplate = (title: string, shortDescription: string, image: string, category?: string) => {
        return `<div class="card card_vertical">
        <div class="image-block">
            <img src='${image? image : ''}' alt="image">
        </div>
        <div class="text-content">
            <span class="category">${category ? category : 'unknown'}</span>
            <h2 class="header">${title}</h2>
            <p class="short-description">${shortDescription}</p>
            <div class="actions-block">
                <button class="btn readmore-btn">Readmore</button>
                <div class="share-block">
                    <button class="btn share-btn">share</button>
                    <ul class="list socials-list">
                        <li><button class="btn social-btn"><i class="fab fa-facebook-f"></i></button></li>
                        <li><button class="btn social-btn"><i class="fab fa-twitter"></i></button></li>
                        <li><button class="btn social-btn"><i class="fab fa-instagram"></i></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    }
    let articleContainer = document.querySelector('.cards-container');
    console.log(data.length);
    for (let i=0; i<data.length; i++) {
        let articleTemplateStr: string = createArticleTemplate(data[i].title, data[i].shortDescription, data[i].image, data[i].name);
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

window.onload = function(){
    getInfo();
    numberOfPages();
}

const axios = require('axios');

function showArticleContent(e: any) {

}

function getInfo() {      //gets info from json-server
    clearArticles();
    currentUrl = baseApiURL + `?_page=${currentPage}&_limit=${limit}`;
    axios.get(currentUrl).then(function(response:any) {
        updateInfo(response.data);
        const readMoreButtons: any = document.querySelectorAll('.readmore-btn');
        readMoreButtons.forEach(function(elem: any){
            elem.addEventListener('click', showArticleContent);
        })
    });
    console.log(currentUrl);
}

export function getInfoByCateg(categ: string){
    alert("Info with categ uploaded!");
    currentCategory = 'nature'; //=categ
    currentUrl = baseApiURL + `?_page=${currentPage}&_limit=${limit}`;
    currentCategory? currentUrl+=`&name=${categ}`: currentUrl = currentUrl;
    axios.get(currentUrl).then(function(response:any) {
        updateInfo(response.data);
    });
}

getInfoButton.addEventListener('click', getInfo);


let createButttonPageTemplate = (value: number) => {
    return value===1? `<li><button class="btn btn_sm pagination-nav-btn btn-activePage" value="${value}">${value}</button></li>`: `<li><button class="btn btn_sm pagination-nav-btn" value="${value}">${value}</button></li>`
}

//----------------------------------------pagination--------------------------------

//count number of pages, create buttons for pages
function numberOfPages(){
    let paginationList = document.querySelector('.pagination-list');
    while(paginationList.firstChild){
        paginationList.removeChild(paginationList.firstChild);
    };
    currentNumberOfPages = Math.ceil(currentNumberOfPages/limit);
    for(let i = 1; i <= currentNumberOfPages; ++i){
        let articleTemplateStr: string = createButttonPageTemplate(i);
        paginationList.insertAdjacentHTML('beforeend', articleTemplateStr);
    }
    const pageButtons: any = document.querySelectorAll('.pagination-nav-btn');
    pageButtons.forEach(function(elem: any){
        elem.addEventListener('click', pagination);
    })
}

//change current page, get articles from current page
function pagination(e: any){
    const pageButtons: any = document.querySelectorAll('.pagination-nav-btn'); //????????????????
    let clickedPage = e.target;
    currentPage = clickedPage.value;
    pageButtons.forEach(function(elem: any){
        elem.classList.remove('btn-activePage');
    })
    clickedPage.classList.add('btn-activePage');
    getInfo();
}


//--------------------Add articles-------------------------
const getArticleButton = document.querySelector('#getArticle');

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

getArticleButton.addEventListener('click', onPostArticle);
//
//----------------------remove articles--------------------------------------
const removeArticleButton = document.querySelector('#removeArticle');

function removeArticle (){
  const inputToDelete: any = document.querySelector('.toDelete');
  let id: number = inputToDelete.value;
  axios.delete('http://localhost:3000/articles/' + id).then(function (response: any){
    inputToDelete.value = '';
    console.log('deleted');
    getInfo();
  });
}

removeArticleButton.addEventListener('click', removeArticle);




