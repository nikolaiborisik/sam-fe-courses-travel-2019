//----------------------------------------pagination--------------------------------

//count number of pages, create buttons for pages
import {limit} from "./config";
import {getArticles} from "./services";
import {onGetInfo} from "./getInfo";
import {currentCategory} from "./chooseCategory";

export let currentPage: number = 1;
let currentNumberOfPages: number;
let numberOfArticles: number;

let createButttonPageTemplate = (value: number) => {
    return value===1? `<li><button class="btn btn_sm pagination-nav-btn btn-activePage" value="${value}">${value}</button></li>`: `<li><button class="btn btn_sm pagination-nav-btn" value="${value}">${value}</button></li>`
}

export function numberOfPages(){
    getArticles(currentCategory).then((response: any)=>{
        numberOfArticles = response.data.length;
        console.log(`setNum=${numberOfArticles}`);
        let paginationList = document.querySelector('.pagination__list');
        while(paginationList.firstChild){
            paginationList.removeChild(paginationList.firstChild);
        };
        currentNumberOfPages = Math.ceil(numberOfArticles/limit);
        console.log(`currentNumberOfPages=${currentNumberOfPages}`);

        for(let i = 1; i <= currentNumberOfPages; ++i){ //create buttons
            let articleTemplateStr: string = createButttonPageTemplate(i);
            paginationList.insertAdjacentHTML('beforeend', articleTemplateStr);
        }

        const pageButtons: any = document.querySelectorAll('.pagination-nav-btn');
        pageButtons.forEach(function(elem: any){
            elem.addEventListener('click', pagination);
        })
    })
}

// var t;
// function up() {
// 	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
// 	if(top > 0) {
// 		window.scrollBy(0,-100);
// 		t = setTimeout('up()',20);
// 	} else clearTimeout(t);
// 	return false;
// }

//change current page, get articles from current page
function pagination(e: Event){
    e.preventDefault();
    e.stopPropagation();
    const pageButtons: any = document.querySelectorAll('.pagination-nav-btn'); //????????????????
    let clickedPage = e.target as HTMLInputElement;
    currentPage = Number(clickedPage.value);
    pageButtons.forEach(function(elem: any){
        elem.classList.remove('btn-activePage');
    })
    clickedPage.classList.add('btn-activePage');
    onGetInfo();
    window.scrollTo(0, 0);
}

export function removeCurrentPage() {
    currentPage = 0;
}