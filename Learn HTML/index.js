const toggleContainer = document.getElementById('toggle');
let isDarkMode = false;

toggleContainer.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleContainer.classList.add('active');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleContainer.classList.remove('active');
    }
});



// Sayfa yüklendiğinde varsayılan mod
document.body.classList.add('light-mode');