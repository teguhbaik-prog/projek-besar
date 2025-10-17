document.addEventListener("DOMContentLoaded", () => {
    console.log("Website siap digunakan");

    // Bagian 1: Ganti bahasa
    const languageButtons = document.querySelectorAll(".language-btn");
    const textElements = document.querySelectorAll("[data-key]");
    
    // Bagian 2: Navigasi responsif
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Bagian 3: Efek scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    // Bagian 4: Fungsi pergantian bahasa
    const translations = {
        ms: {
            home: "Laman Utama",
            about: "Tentang Kami",
            services: "Perkhidmatan",
            contact: "Hubungi",
            description: "Kami menyediakan perkhidmatan pembinaan rumah, renovasi, dan reka bentuk dalaman di seluruh Malaysia.",
        },
        id: {
            home: "Beranda",
            about: "Tentang Kami",
            services: "Layanan",
            contact: "Kontak",
            description: "Kami menyediakan jasa pembangunan rumah, renovasi, dan desain interior di seluruh Indonesia.",
        },
        en: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            description: "We provide house construction, renovation, and interior design services across Malaysia.",
        }
    };

    // Ganti bahasa saat tombol diklik
    languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.dataset.lang;
            textElements.forEach(el => {
                const key = el.dataset.key;
                el.textContent = translations[lang][key];
            });
        });
    });

    // Navigasi menu toggle (untuk mobile)
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
