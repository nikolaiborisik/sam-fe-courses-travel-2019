import {getArticles, getInfo} from "./services";
import {onGetInfo} from "./getInfo";
import {numberOfPages} from "./pagination";

let categoryForm = <HTMLFormElement>document.getElementById("categoryForm");
export let currentCategory: string;

categoryForm.addEventListener('change', getCategory);

function getCategory() {
   currentCategory = categoryForm.categoryRadio.value;
   onGetInfo();
   numberOfPages();
}

//------------------------------------------------------------
let tagsForm = <HTMLFormElement>document.getElementById("tagsForm");
let tagCheckbox = <HTMLInputElement><unknown>document.getElementsByName("tagCheckbox");
let tagsValue: string;

tagsForm.addEventListener('click', getTags);

function getTags() {
   // tagsValue = tagsForm.tagCheckbox.value;
   for (let i=0; i<tagsForm.length; i++) {
    //   if (tagsForm[i].checked) {
    //       arrayTags =
    //   }

   }
    // alert(tagsValue);

}


