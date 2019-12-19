import { getInfoByCateg } from "./services";

let categoryForm = <HTMLFormElement>document.getElementById("categoryForm");
let categoryRadio = <HTMLInputElement><unknown>document.getElementsByName("categoryRadio");
let categoryValue: string;



categoryForm.addEventListener('change', getCategory);

function getCategory() {
   categoryValue = categoryForm.categoryRadio.value; 
   alert(categoryValue);

   getInfoByCateg(categoryValue);
} 



//------------------------------------------------------------
let tagsForm: any = document.getElementById("tagsForm");
//let tagCheckbox = <HTMLInputElement><unknown>document.getElementsByName("tagCheckbox");
let tagsValueArr: string[] = [];

tagsForm.addEventListener('change', getTags);

function getTags() {
    //tagsValue = tagsForm.tagCheckbox.value;
   for (let i=0; i<tagsForm.length; i++) {
       if (tagsForm[i].checked) {
            if (tagsValueArr.indexOf(tagsForm[i].value) == -1) {
                tagsValueArr.push(tagsForm[i].value);
            }
       }
       else {
        tagsValueArr.splice(i, 1); 
       }
    }
 alert(tagsValueArr);
}


