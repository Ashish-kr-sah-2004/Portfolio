// ===== Typing Effect =====
const titles = [
    "Full Stack Developer",
    "Problem Solver",
    "Self-Learner",
    "DSA Enthusiast",
    "Web Developer"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typedText");

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typedText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            navLink.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveLink);

// ===== Scroll Reveal Animation =====
function revealElements() {
    const elements = document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .info-card, .about-text, .contact-info, .contact-form-wrapper, .stat"
    );

    elements.forEach(el => {
        if (!el.classList.contains("fade-in")) {
            el.classList.add("fade-in");
        }

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 60) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("DOMContentLoaded", revealElements);

// ===== Animate Stat Numbers =====
function animateStats() {
    const stats = document.querySelectorAll(".stat-number");

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute("data-target"));
        const rect = stat.getBoundingClientRect();

        if (rect.top < window.innerHeight && !stat.classList.contains("counted")) {
            stat.classList.add("counted");
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.ceil(current);
                }
            }, 30);
        }
    });
}

window.addEventListener("scroll", animateStats);

// ===== Animate Skill Bars =====
function animateSkillBars() {
    const bars = document.querySelectorAll(".skill-progress");

    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && !bar.classList.contains("animated")) {
            bar.classList.add("animated");
            const width = bar.getAttribute("data-width");
            bar.style.width = width + "%";
        }
    });
}

window.addEventListener("scroll", animateSkillBars);

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:sahashishkumar2004@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    contactForm.reset();
});
