// export function UpdateInfo(data:any){
//     let template = (title: string, shortDescription: string, image: string, category?: string) => {
//         return `<div class="card card_vertical">
//         <div class="image-block">
//             <img src='${image? image : ''}' alt="image">
//         </div>
//         <div class="text-content">
//             <span class="category">${category ? category : 'unknown'}</span>
//             <h2 class="header">${title}</h2>
//             <p class="short-description">${shortDescription}</p>
//             <div class="actions-block">
//                 <button class="btn readmore-btn">Readmore</button>
//                 <div class="share-block">
//                     <button class="btn share-btn">share</button>
//                     <ul class="list socials-list">
//                         <li><button class="btn social-btn"><i class="fab fa-facebook-f"></i></button></li>
//                         <li><button class="btn social-btn"><i class="fab fa-twitter"></i></button></li>
//                         <li><button class="btn social-btn"><i class="fab fa-instagram"></i></button></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     }
//     let articleContainer = document.querySelector('.cards-container');
//     for (let i=0; i<data.length; i++) {
//         let articleTemplateStr: string = template(data[i].title, data[i].shortDescription, data[i].image, data[i].name);
//         articleContainer.insertAdjacentHTML('beforeend', articleTemplateStr);
//     }
// }
