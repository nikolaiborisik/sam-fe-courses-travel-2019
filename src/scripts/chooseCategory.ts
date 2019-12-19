import {getArticles, getInfo} from "./services";
import {onGetInfo} from "./getInfo";
import {numberOfPages} from "./pagination";

let categoryForm = <HTMLFormElement>document.getElementById("categoryForm");
//let categoryRadio = <HTMLInputElement><unknown>document.getElementsByName("categoryRadio");
//let categoryValue: string;
export let currentCategory: string;

categoryForm.addEventListener('change', getCategory);

function getCategory() {
  /*  for (let i=0; i<categoryForm.length; i++) {
        if (categoryRadio[i].checked) {
            categoryValue = categoryRadio[i].value.toString();
        }
        getInfoByCateg(categoryValue);
        alert(categoryValue);
    }  */
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


