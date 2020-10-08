$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $(".linkedin-icon").click(function () {
        window.open("https://www.linkedin.com/in/anusontarangkul/")
    });

    $(".github-icon").click(function () {
        window.open("https://github.com/anusontarangkul")
    });

    $(".resume-icon").click(function () {
        window.open("./assets/pdf/frontend-resume.pdf")
    });

    document.querySelector('.modaltest').addEventListener('click', function (event) {
        event.preventDefault();
        var modal = document.querySelector('.modal');  // assuming you have only 1
        var html = document.querySelector('html');
        modal.classList.add('is-active');
        html.classList.add('is-clipped');

        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });

        modal.querySelector('.modal-close').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });

    });

});