import {axios, baseApiURL, limit} from "./config";
import {ArticleModel} from "../models/ArticleModel";



//--------------------Add articles-------------------------
export function postArticle(newArticle:ArticleModel){
    return axios.post(`${baseApiURL}/articles`, newArticle);
}

export function removeArticle(id: number) {
    return axios.delete('http://localhost:3000/articles/' + id);
}

export function getArticles() {
    return axios.get(`${baseApiURL}/articles`);
}

export function getInfoByCurrentPage(currentPage: number) {
    let currentUrl: string = `${baseApiURL}/articles?_page=${currentPage}&_limit=${limit}`;
    console.log(currentUrl);
    return axios.get(currentUrl);
}



