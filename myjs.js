document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const storyModal = document.querySelector('.gallery-story');
    const storyTitle = document.querySelector('.story-title');
    const storyText = document.querySelector('.story-text');
    const closeBtn = document.querySelector('.close-btn');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Navigation functions
    function goToSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Story modal functions
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        img.addEventListener('click', () => {
            storyTitle.textContent = img.alt;
            storyText.textContent = img.dataset.story;
            storyModal.classList.add('active');
        });
    });
    
    closeBtn.addEventListener('click', () => {
        storyModal.classList.remove('active');
    });
    
    storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) {
            storyModal.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Change icon based on menu state
        if (nav.classList.contains('active')) {
            this.innerHTML = '✕'; // Close icon
        } else {
            this.innerHTML = '☰'; // Hamburger icon
        }
    });
    
    // Close menu when a link is clicked (for single page navigation)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });
});