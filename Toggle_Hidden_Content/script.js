function toggleContent(contentId, labelElement) {
    var content = document.getElementById(contentId);
    var symbol = labelElement.querySelector('.symbol');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        symbol.textContent = "-";
    } else {
        content.style.display = "none";
        symbol.textContent = "+";
    }
}
