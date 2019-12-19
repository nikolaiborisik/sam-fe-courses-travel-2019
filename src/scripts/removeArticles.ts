import {removeArticle} from "./services";
import {onGetInfo} from "./getInfo";

//----------------------remove articles--------------------------------------
const removeArticleButton = document.querySelector('#removeArticle');
function onRemoveArticle (){
    const inputToDelete: any = document.querySelector('.toDelete');
    let id: number = inputToDelete.value;
    removeArticle(id).then(function (response: any){
        inputToDelete.value = '';
        console.log('deleted');
        onGetInfo();
    });
}
removeArticleButton.addEventListener('click', onRemoveArticle);