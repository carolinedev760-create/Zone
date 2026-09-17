document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU LATERAL
    ========================= */

    const menuButton =
        document.getElementById("menuButton");

    const closeMenu =
        document.getElementById("closeMenu");

    const sideMenu =
        document.getElementById("sideMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");


    function openMenu() {

        sideMenu.classList.add("active");

        menuOverlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    function closeSideMenu() {

        sideMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

        document.body.style.overflow = "";
    }


    menuButton.addEventListener(
        "click",
        openMenu
    );

    closeMenu.addEventListener(
        "click",
        closeSideMenu
    );

    menuOverlay.addEventListener(
        "click",
        closeSideMenu
    );


    /* =========================
       CARROSSEL
    ========================= */

    const slides =
        document.querySelectorAll(".carousel-slide");

    const dots =
        document.querySelectorAll(".dot");

    const prevButton =
        document.getElementById("prevButton");

    const nextButton =
        document.getElementById("nextButton");

    const carousel =
        document.querySelector(".carousel");


    let currentSlide = 0;

    let autoPlay;


    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });


        dots.forEach(dot => {

            dot.classList.remove("active");

        });


        slides[index].classList.add("active");

        dots[index].classList.add("active");

        currentSlide = index;
    }


    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);
    }


    function previousSlide() {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide =
                slides.length - 1;

        }

        showSlide(currentSlide);
    }


    nextButton.addEventListener(
        "click",
        nextSlide
    );


    prevButton.addEventListener(
        "click",
        previousSlide
    );


    /* =========================
       DOTS
    ========================= */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            restartAutoPlay();

        });

    });


    /* =========================
       AUTOPLAY
    ========================= */

    function startAutoPlay() {

        autoPlay =
            setInterval(nextSlide, 5000);

    }


    function stopAutoPlay() {

        clearInterval(autoPlay);

    }


    function restartAutoPlay() {

        stopAutoPlay();

        startAutoPlay();

    }


    startAutoPlay();


    /* PAUSA AO PASSAR O MOUSE */

    carousel.addEventListener(
        "mouseenter",
        stopAutoPlay
    );


    carousel.addEventListener(
        "mouseleave",
        startAutoPlay
    );


    /* =========================
       MENU INFERIOR
    ========================= */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();


            navLinks.forEach(item => {

                item.classList.remove("active");

            });


            link.classList.add("active");

        });

    });


    /* =========================
       BUSCA
    ========================= */

    const searchInput =
        document.getElementById("searchInput");


    searchInput.addEventListener(
        "input",
        event => {

            const searchValue =
                event.target.value.toLowerCase();

            const guides =
                document.querySelectorAll(".guide-card");


            guides.forEach(guide => {

                const title =
                    guide
                        .querySelector("h3")
                        .textContent
                        .toLowerCase();


                if (title.includes(searchValue)) {

                    guide.style.display = "";

                } else {

                    guide.style.display = "none";

                }

            });

        }
    );


    /* =========================
       TECLA ESC
    ========================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSideMenu();

            }

        }
    );

});