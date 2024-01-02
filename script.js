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

function handleFormSubmission(form) {
    console.log("Função handleFormSubmission chamada.");

    event.preventDefault();
    
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Form submitted to Formspree:", data);
            
            if (data.success) {
                
                alert("Registro bem-sucedido!");
            } else {
                
                alert("Erro no registro. Tente novamente.");
            }
        })
        .catch(error => {
            console.error("Error during form submission:", error);
        });
}
