import {getArticles, getInfo} from "./services";
import {onGetInfo} from "./getInfo";
import {numberOfPages} from "./pagination";

let categoryForm = <HTMLFormElement>document.getElementById("categoryForm");
//let categoryRadio = <HTMLInputElement><unknown>document.getElementsByName("categoryRadio");
//let categoryValue: string;
export let currentCategory: string;

categoryForm.addEventListener('change', getCategory);

function getCategory() {
   currentCategory = categoryForm.categoryRadio.value;
   onGetInfo();
   numberOfPages();
}


