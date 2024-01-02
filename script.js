document.addEventListener("DOMContentLoaded", function () {
    var defaultTab = document.querySelector(".nav ul li a");
    defaultTab.classList.add("active");

    var tabLinks = document.querySelectorAll(".nav ul li a");
    tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener("click", function (event) {
            changeTab(event, tabLink.getAttribute("data-tab-id"));
        });
    });
});

function changeTab(event, tabId) {
    var tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(function (tab) {
        tab.style.display = "none";
    });

    var tabLinks = document.querySelectorAll(".nav ul li a");
    tabLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    document.getElementById(tabId).style.display = "block";

    event.currentTarget.classList.add("active");
}

$(document).ready(function () {
    $('#register-form').submit(function (e) {
        e.preventDefault();        

        $('#contact-form')[0].reset();

        alert('Mensagem enviada com sucesso!');
    });
