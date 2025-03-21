document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds
    
    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Function to show the next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    // Set up automatic slide transition
    let slideTimer = setInterval(nextSlide, slideInterval);
    
    // Add click event listeners to dots for manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
            showSlide(index);
        });
    });
    
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024 && nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Header Icons Functionality
    const searchIcon = document.querySelector('.search-icon');
    const userIcon = document.querySelector('.user-icon');
    const cartIcon = document.querySelector('.cart-icon');
    
    // Search icon functionality
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Search functionality will be implemented here');
        });
    }
    
    // User icon functionality
    if (userIcon) {
        userIcon.addEventListener('click', function(e) {
            e.preventDefault();
            alert('User account functionality will be implemented here');
        });
    }
    
    // Cart icon functionality
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Shopping cart functionality will be implemented here');
        });
    }
});