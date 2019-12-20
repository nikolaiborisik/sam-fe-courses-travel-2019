import {onGetInfo} from "./getInfo";
import {numberOfPages, removeCurrentPage} from "./pagination";

let categoryForm = <HTMLFormElement>document.getElementById("categoryForm");
export let currentCategory: string;

categoryForm.addEventListener('change', getCategory);

function getCategory() {
   currentCategory = categoryForm.categoryRadio.value;
   removeCurrentPage();
   onGetInfo();
   numberOfPages();
}

