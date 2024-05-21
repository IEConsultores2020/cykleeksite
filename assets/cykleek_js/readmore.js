function readmorecommitment(dots, more, myBtn) {
    var dots = document.getElementById(dots, more, myBtn);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(myBtn);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        const svgCode = '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 4V20M8 12H20M8 12L12 8M8 12L12 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        dots.style.display = "none";
        btnText.innerHTML = svgCode;
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