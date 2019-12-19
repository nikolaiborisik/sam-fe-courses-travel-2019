import {numberOfPages} from "./pagination";
import {onGetInfo} from "./getInfo";

window.onload = function(){
    onGetInfo();
    numberOfPages();
}

// export function getInfoByCateg(categ: string){
//     alert("Info with categ uploaded!");
//     currentCategory = 'nature'; //=categ
//     currentUrl = baseApiURL + `?_page=${currentPage}&_limit=${limit}`;
//     currentCategory? currentUrl+=`&name=${categ}`: currentUrl = currentUrl;
//     axios.get(currentUrl).then(function(response:any) {
//         updateInfo(response.data);
//     });
// }
