import {removeArticle} from "./services";
import {onGetInfo} from "./getInfo";
import {numberOfPages, setCurrentPage} from "./pagination";

//----------------------remove articles--------------------------------------

export function onRemoveArticle (event: Event){
    const target = event.target as HTMLButtonElement;
    const card: HTMLElement = target.closest('.card');
    const id: String = card.id;
    removeArticle(+id).then((response: any)=>{
        setCurrentPage(1);
        onGetInfo();
        numberOfPages();
    });
}