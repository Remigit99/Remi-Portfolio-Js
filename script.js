

AOS.init({
    duration: 1500
});


document.querySelector('form').onsubmit = (e) => {
    e.target.submit();
    e.target.reset();
    return false;
};