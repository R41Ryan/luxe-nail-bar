var collapsibles = document.querySelectorAll(".collapsible")

for (let i = 0; i < collapsibles.length; i++) {
    let collapsibleButton = collapsibles[i].querySelector(".collapsible-btn");
    let collapsibleContent = collapsibles[i].querySelector(".content");
    collapsibleButton.addEventListener("click", function() {
        if (collapsibleContent.style.maxHeight == "0px" || !collapsibleContent.style.maxHeight) {
            let calculatedHeight = collapsibleContent.scrollHeight + 32;
            collapsibleContent.style.maxHeight = (calculatedHeight) + "px";
        } else {
            collapsibleContent.style.maxHeight = "0px"
        }
    })
}