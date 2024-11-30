document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
});

document.getElementById("popup-open-btn").addEventListener("click", function() {
    document.getElementById("my-popup").classList.add("open");
});


const formPopup = document.querySelector("#my-popup .form-popup");
const popup = document.getElementById("my-popup");

if (formPopup && popup) {
    formPopup.addEventListener('click', event => {
        event.isClickWithInModal = true;
    });

    popup.addEventListener('click', event => {
        if (event.isClickWithInModal) return; 
        event.currentTarget.classList.remove('open');
    });
} else {
    console.error("Элементы модального окна не найдены.");
};
