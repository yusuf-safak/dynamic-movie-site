/*
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const UI = new UI();
const Storage = new Storage();
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",cleaAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if(title == "" || director == "" || url == ""){
        UI.displayMessages("Tüm alanları doldurun...", "danger");
    }
    else{
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film başarıyla eklendi...", "success");
    }
    
    UI.clearInputs(titleElement,directorElement,urlElement);    

    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id == "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film başarıyla silindi...","success");
    }
}
function cleaAllFilms(){
    if(confirm("Tüm filmleri silmek istediğinize emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("Tüm filmler başarıyla silindi...","success");
    }
}
*/

//ES6
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",cleaAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if(title == "" || director == "" || url == ""){
        UI.displayMessages("Tüm alanları doldurun...", "danger");
    }
    else{
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film başarıyla eklendi...", "success");
    }
    
    UI.clearInputs(titleElement,directorElement,urlElement);    

    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id == "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film başarıyla silindi...","success");
    }
}
function cleaAllFilms(){
    if(confirm("Tüm filmleri silmek istediğinize emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("Tüm filmler başarıyla silindi...","success");
    }
}
