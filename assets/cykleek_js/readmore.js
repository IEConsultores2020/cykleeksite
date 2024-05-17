function readmorecommitment(dots, more, myBtn) {
    var dots = document.getElementById(dots, more, myBtn);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(myBtn);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function seeAnswer(dots, more, myBtn) {
    var dots = document.getElementById(dots, more, myBtn);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(myBtn);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See Answer";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide Answer";
        moreText.style.display = "inline";
    }
}