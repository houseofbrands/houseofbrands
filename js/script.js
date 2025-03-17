document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected slide and activate corresponding dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update current slide index
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
            // Clear the automatic timer and restart it
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
            
            // Show the selected slide
            showSlide(index);
        });
    });
    
    // Mobile Navigation Toggle (for responsive design)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});