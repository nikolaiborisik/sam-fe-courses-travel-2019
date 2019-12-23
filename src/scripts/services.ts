import {axios, baseApiURL, limit} from "./config";
import {ArticleModel} from "../models/ArticleModel";

export function postArticle(newArticle:ArticleModel){
    return axios.post(`${baseApiURL}/articles`, newArticle);
}

export function removeArticle(id: number) {
    return axios.delete(`${baseApiURL}/articles/` + id);
}

let createButttonPageTemplate = (value: number) => {
    return value===1? `<li><button class="btn btn_sm pagination-nav-btn btn-activePage" value="${value}">${value}</button></li>`: `<li><button class="btn btn_sm pagination-nav-btn" value="${value}">${value}</button></li>`
}

export function getArticles(categ?: string) { // by categ
    let currentUrl: string = `${baseApiURL}/articles`;
    if(categ){
        currentUrl+=`?category=${categ}`
    }
    return axios.get(currentUrl);
}

export function getArticlesById(id: number) {
    let currentUrl: string = `${baseApiURL}/articles?id=${id}`;
    return axios.get(currentUrl);
}

export function getInfo(currentPage: number, categ?: string) {
    let currentUrl: string = `${baseApiURL}/articles?_page=${currentPage}&_limit=${limit}`;
    if(categ){
        currentUrl+=`&category=${categ}`
    }
    console.log(currentUrl);
    return axios.get(currentUrl);
}



