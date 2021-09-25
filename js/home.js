$(function () {

    // Scroll To Features

    $('section.header .overlay span.arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('section.features ').offset().top
        }, 100);
    });

    let myButton = document.querySelector(".scrolltop");

    window.onscroll = function () {
        // this function to know me the number in my scroll

        //console.log(window.pageYOffset)

        if (window.pageYOffset >= 500) {
            myButton.style.display = "block";
        }
        else {
            myButton.style.display = "none";
        }
    }

    myButton.addEventListener("click", scroll);

    function scroll() {
        window.scrollTo(0, 0);
    }

});
