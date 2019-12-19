import {baseApiURL} from "./config";

const axios = require('axios');

//--------------------Add articles-------------------------
import {ArticleModel} from "../models/ArticleModel";

export function postArticle(newArticle:ArticleModel){
    return axios.post(`${baseApiURL}/articles`, newArticle);
}




