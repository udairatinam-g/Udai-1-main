document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        window.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
        });
    }
});
