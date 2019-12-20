import {removeArticle} from "./services";
import {onGetInfo} from "./getInfo";
import {currentPage, numberOfPages, setCurrentPage} from "./pagination";
import {currentCategory} from "./chooseCategory";

//----------------------remove articles--------------------------------------

export function onRemoveArticle (event: any){
    const target = event.target as HTMLButtonElement;
    const card: HTMLElement = target.closest('.card');
    const id: String = card.id;
    removeArticle(+id).then(function (response: any){
        setCurrentPage(1);
        onGetInfo();
        numberOfPages();
    });
}