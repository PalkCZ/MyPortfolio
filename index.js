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