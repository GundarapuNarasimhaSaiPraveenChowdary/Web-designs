// Function to show main content based on button click
function showContent(contentId) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected content div
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';

        // If content3 is shown, ensure subcontent1 is active by default
        if (contentId === 'content3') {
            showSubContent('subcontent1');
        }
    }
}

// Function to show subcontent based on button click
function showSubContent(subContentId) {
    // Hide all subcontent divs
    const subContents = document.querySelectorAll('.sub-content');
    subContents.forEach(subContent => {
        subContent.classList.remove('active');
    });

    // Show the selected subcontent div
    const selectedSubContent = document.getElementById(subContentId);
    if (selectedSubContent) {
        selectedSubContent.classList.add('active');
    }
}

// Function to show the popup
function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
