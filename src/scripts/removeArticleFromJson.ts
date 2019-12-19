const axios = require('axios');

//----------------------remove articles from json--------------------------------------
const removeArticleButton = document.querySelector('#removeArticle');

function removeArticle (){
    const inputToDelete: any = document.querySelector('.toDelete');
    let id: number = inputToDelete.value;
    axios.delete('http://localhost:3000/articles/' + id).then(function (response: any){
        inputToDelete.value = '';
        console.log('deleted');
    });
}
removeArticleButton.addEventListener('click', removeArticle);