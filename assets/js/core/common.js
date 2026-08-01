$(function () {

    const $header = $(".header");
    const $menu = $("#menu");
    const $navbar = $(".navbar");
    const $navLinks = $(".nav-link");

    $menu.on("click", function () {
        $(this).toggleClass("fa-bars fa-xmark");
        $navbar.toggleClass("nav-toggle");
    });

    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 60) {
            $header.addClass("scrolled");
        } else {
            $header.removeClass("scrolled");
        }

        let scrollPosition = $(window).scrollTop();

        $("section").each(function () {

            const sectionTop = $(this).offset().top - 150;
            const sectionHeight = $(this).outerHeight();
            const sectionId = $(this).attr("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                $navLinks.removeClass("active");
                $('.nav-link[href="#' + sectionId + '"]').addClass("active");
            }

        });

    });

    $navLinks.on("click", function (e) {

        const target = $(this).attr("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top - 100
                },
                500
            );

            $navbar.removeClass("nav-toggle");
            $menu.removeClass("fa-xmark").addClass("fa-bars");

        }

    });

});
/* Scroll Reveal */

const revealElements = document.querySelectorAll(
    ".education-card, .stat-card, .skill-category"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});