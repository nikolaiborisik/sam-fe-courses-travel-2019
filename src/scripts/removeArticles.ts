import {removeArticle} from "./services";
import {onGetInfo} from "./getInfo";
import {currentPage} from "./pagination";
import {currentCategory} from "./chooseCategory";

//----------------------remove articles--------------------------------------
// const removeArticleButtons: any = document.querySelectorAll('.delete-article-btn');
// removeArticleButtons.forEach(function(elem: any){
//     elem.addEventListener('click', onRemoveArticle);
// })
export function onRemoveArticle (event: any){
    //let id: number = event.target;
    const target = event.target as HTMLElement;
    const card: HTMLElement = target.closest('.card');
    const id: String = card.id;
    removeArticle(+id);

    console.log('deleted');
    console.log(currentPage);
    console.log(currentCategory);
    onGetInfo();
}