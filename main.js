const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    if (!icon.classList.contains('hover')) {
        icon.classList.add('hover');
    }
});
