

AOS.init({
    duration: 1500
});

// const btnSubmit =  document.getElementById("btnsubmit");
// btnSubmit.value = "";


// const resetForm = document.getElementById("myForm").reset();

document.querySelector('form').onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
};