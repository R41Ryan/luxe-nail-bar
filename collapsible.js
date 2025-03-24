var collapsibles = document.querySelectorAll(".collapsible")

for (let i = 0; i < collapsibles.length; i++) {
    let collapsibleButton = collapsibles[i].querySelector("button");
    let collapsibleContent = collapsibles[i].querySelector(".content");
    collapsibleButton.addEventListener("click", function() {
        if (collapsibleContent.style.height == "0px") {
            collapsibleContent.style.height = collapsibleContent.scrollHeight + "px";
        } else {
            collapsibleContent.style.height = "0px"
        }
    })
}