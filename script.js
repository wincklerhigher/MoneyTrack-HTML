function changeTab(event, tabId) {
        var i, tabContent, tabLinks;

        tabContent = document.querySelectorAll(".tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        tabLinks = document.querySelectorAll("nav ul li a");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active");
        }

        document.getElementById(tabId).style.display = "block";

        event.currentTarget.classList.add("active");
    }

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
        
        var ServerResponse = {
            success: true,
            message: "Registro bem-sucedido!"
        };

        if (ServerResponse.success) {
            alert(ServerResponse.message);
            return true; 
        } else {
            alert("Erro no registro. Tente novamente.");
            return false;
        }
    }
