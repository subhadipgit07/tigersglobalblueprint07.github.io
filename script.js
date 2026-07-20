/*====================================================
TIGERS GLOBAL BLUEPRINT
script.js
Version 1.0
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
    LOADER
    ==============================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });


    /*==============================================
    BACK TO TOP BUTTON
    ==============================================*/

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*==============================================
    SMOOTH SCROLLING
    ==============================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /*==============================================
    ACTIVE NAVIGATION
    ==============================================*/

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function highlightNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", highlightNav);


    /*==============================================
    ANIMATED COUNTERS
    ==============================================*/

    const counters = document.querySelectorAll(".counter");

    function runCounters() {

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        });

    }

    if (counters.length > 0) {

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    runCounters();

                    counterObserver.disconnect();

                }

            });

        });

        counterObserver.observe(counters[0]);

    }


    /*==============================================
    SCROLL REVEAL ANIMATION
    ==============================================*/

    const revealItems = document.querySelectorAll(

        ".mission-card, .pillar-card, .pathway-card, .position-card, .training-card, .news-card, .video-card, .analytics-card, .community-card"

    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition = ".8s ease";

        revealObserver.observe(item);

    });


    /*==============================================
    NEWSLETTER
    ==============================================*/

    const newsletterForm = document.querySelector(".newsletter form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", e => {

            e.preventDefault();

            const email = newsletterForm.querySelector("input").value.trim();

            const emailRegex =

                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            alert("Thank you for subscribing!");

            newsletterForm.reset();

        });

    }


    /*==============================================
    VIDEO CARDS
    ==============================================*/

    document.querySelectorAll(".video-card").forEach(card => {

        card.addEventListener("click", () => {

            alert("Video integration will be connected in Phase 2.");

        });

    });


    /*==============================================
    TRAINING BUTTONS
    ==============================================*/

    document.querySelectorAll(".training-card a").forEach(btn => {

        btn.addEventListener("click", e => {

            e.preventDefault();

            alert("Training modules will be available soon.");

        });

    });


    /*==============================================
    PLAYER OF THE WEEK
    ==============================================*/

    const playerButton = document.querySelector(".player-card .primary-btn");

    if (playerButton) {

        playerButton.addEventListener("click", e => {

            e.preventDefault();

            alert("Player stories coming soon!");

        });

    }


    /*==============================================
    YEAR
    ==============================================*/

    const year = new Date().getFullYear();

    const copyright = document.querySelector(".copyright p");

    if (copyright) {

        copyright.innerHTML =

            `© ${year} Tigers Global Blueprint. All Rights Reserved.`;

    }

});