function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greet = ""

    if (h<12) {
        greet = "good morning,";
    }
    else if (12<h && h<18) {
        greet = "good afternoon,";
    }
    else if (18<h && h<20) {
        greet = "good evening,";
    }
    else if ((20<h && h<24) || (0<h && h<5)) {
        greet = "good night,";
    }

    let h2 = document.getElementById("greeting");
    h2.innerHTML = greet + " my name is isaiah engle";
}

window.onload = greetingFunc();

function addYear() {
    let d = new Date();
    let year = d.getFullYear();
    let footer = document.getElementById("copyYear")
    footer.innerHTML = "&copy; " + year + " Webpage created and designed by Isaiah Engle"
}

window.onload = addYear();

function toggleList() {
    const list = document.getElementById("toggleable");
    const button = document.getElementById("toggler");
    if (list.style.display === "" || list.style.display === "none") {
        list.style.display = "block";
        button.innerHTML = "contract list";
    } else {
        list.style.display = "none";
        button.innerHTML = "expand list";
    }
}

$(document).ready(function(){
    $(".hidden").hide();
    $(".textToggler").click(function(){
        $(".hidden").toggle();
        if ($(".textToggler").text() == "read more") {
            $(".textToggler").text("read less");
        }
        else {
            $(".textToggler").text("read more");
        }
    });
});

function checkValid() {
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userText = document.getElementById("content");
    const msg = document.getElementById("validateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "please submit valid forms"
    }
    else {
        msg.innerHTML = ""
    }
}