//validation
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const textareaEl = document.querySelector('#textarea');
const butEl = document.querySelector('#submit');
const form = document.querySelector('#form');
const img = document.querySelector('#theImage');


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    isValidMesg();

});

butEl.addEventListener('click', function (e) {
    e.preventDefault();

    var element = document.body;
    element.classList.toggle("dark-mode");

});



function checkUsername() {
    if (usernameEl.value.length > 3 && usernameEl.value.length < 10) {
        document.getElementById("usermsg").innerText = "Correct";
        document.getElementById("usermsg").style.color = "green";
    }
    else if (usernameEl.value.length > 10) {
        document.getElementById("usermsg").innerText = "Your name lenght must be less than 10 charecters";
        document.getElementById("usermsg").style.color = "yellow";
    }
    else {
        document.getElementById("usermsg").innerText = "Your name lenght must be more than 3 charecters";
        document.getElementById("usermsg").style.color = "yellow";


    }
};

function checkEmail() {
    if (emailEl.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById("emailmsg").innerText = "Correct";
        document.getElementById("emailmsg").style.color = "green";

    }
    else {
        document.getElementById("emailmsg").innerText = "Invalid Email";
        document.getElementById("emailmsg").style.color = "red";

    }

};




function isValidMesg() {
    if (textareaEl.value.length < 20) {
        document.getElementById("textmsg").innerText = "Your Message Legnth Must Be More Than 20 Charecter";
        document.getElementById("textmsg").style.color = "yellow";
    }
    else {
        document.getElementById("textmsg").innerText = "Correct";
        document.getElementById("textmsg").style.color = "green";
    }
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'textarea':
            isValidMesg();
            break;
    }
}));


//image effect
img.addEventListener('click', (e) => {
    e.preventDefault();
    makeFullScreen();
});

function makeFullScreen() {
    //Use the specification method before using prefixed versions
    if (img.requestFullscreen) {
        img.requestFullscreen();
    }
    else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
    }
    else if (img.mozRequestFullScreen) {
        img.mozRequestFullScreen();
    }
    else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
    } else {
        console.log("Fullscreen API is not supported");
    }

}



document.addEventListener('dblclick', function (e) {
    e.preventDefault();

    var element = document.body;
    var element2 = document.querySelector("ul");
    var element3 = document.querySelector("#pinfo");
    var element4 = document.querySelector("#downloadbut");
    var element5 = document.querySelector("#contactbut");
    var element6 = document.querySelector("#about");
    var element7 = document.querySelector("#resume");
    var element8 = document.querySelector("#works");
    var element9 = document.querySelector("#contact");
    element.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
    element3.classList.toggle("dark-mode");
    element4.classList.toggle("dark-mode");
    element5.classList.toggle("dark-mode");
    element6.classList.toggle("dark-mode");
    element7.classList.toggle("dark-mode");
    element8.classList.toggle("dark-mode");
    element9.classList.toggle("dark-mode");
    

});