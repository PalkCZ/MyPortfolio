function showMenu(element) {
    var showMenu = document.body.getElementsByClassName("showMenu")[0];
    if (showMenu.style.visibility == "visible") {
        element.setAttribute("src", "Images/moreMenu.png");
        showMenu.style.visibility = "hidden";
        showMenu.style.display = "none";
        return;
    }
    element.setAttribute("src", "Images/closeMenuIcon.png");
    showMenu.style.visibility = "visible";
    showMenu.style.display = "block";
}

function imageChangeSrc(element, srcToChangeTo) {
    element.setAttribute("src", srcToChangeTo);
}

function showHoverText(element) {
    var text = element.querySelector("#imageOnHoverText");
    text.style.visibility = "visible";

    var hide = element.querySelector("#hide");
    hide.style.display = "none";

    var show = element.querySelector("#show");
    show.style.display = "block";
}

function hideHoverText(element) {
    var text = element.querySelector("#imageOnHoverText");
    text.style.visibility = "hidden";

    var hide = element.querySelector("#hide");
    hide.style.display = "block";

    var show = element.querySelector("#show");
    show.style.display = "none";
}

function loadPage(pageToLoad) {
    window.location.href = pageToLoad;
}

function rotateIcon(element) {
    var icon = element.querySelector("#icon");
    if (icon.style.transform == "rotate(45deg)") {
        icon.style.transform = "rotate(90deg)";
    }

    else {
        icon.style.transform = "rotate(45deg)"
    }
}

function scrollToTargetAdjusted(target) {

    if (!window.location.href.includes("index.html")) {
        sessionStorage.setItem("loadElement", target);
        window.location.href = "index.html";
    }
    else {
        var element = document.getElementById(target);
        var headerOffset = 50;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

function scrollToTargetAdjustedBody() {
    var element = document.getElementById(sessionStorage.getItem("loadElement"));
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    sessionStorage.setItem("loadElement", null);
}