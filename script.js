// Navigation Menu Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
});

// Smooth Scroll and Close Menu on Link Click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close mobile menu
        navToggle?.classList.remove('active');
        navList?.classList.remove('active');
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate offset for fixed nav
            const navHeight = document.querySelector('.nav-menu').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('.nav-menu').offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Loading Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loading');
        loader.classList.add('hidden');
    }, 1500);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Stagger animations for DJ cards
            if (entry.target.classList.contains('dj-card')) {
                const cards = document.querySelectorAll('.dj-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Elements to observe
document.addEventListener('DOMContentLoaded', () => {
    // Observe hangout content
    const hangoutContent = document.querySelector('.hangout-content');
    if (hangoutContent) observer.observe(hangoutContent);
    
    // Observe info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => observer.observe(card));
    
    // Observe DJ cards
    const djCards = document.querySelectorAll('.dj-card');
    if (djCards.length > 0) {
        observer.observe(djCards[0]); // Only observe the first one to trigger all
    }
    
    // Observe schedule items
    const scheduleItems = document.querySelectorAll('.schedule-item');
    scheduleItems.forEach(item => observer.observe(item));
    
    // Observe sponsor items
    const sponsorItems = document.querySelectorAll('.sponsor-item');
    sponsorItems.forEach(item => observer.observe(item));
});


// Parallax effect for hero elements
const heroElements = document.querySelectorAll('.floating-element');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    heroElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Gallery touch/swipe functionality
const gallerySlider = document.querySelector('.gallery-slider');
let isDown = false;
let startX;
let scrollLeft;

if (gallerySlider) {
    gallerySlider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - gallerySlider.offsetLeft;
        scrollLeft = gallerySlider.scrollLeft;
    });
    
    gallerySlider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - gallerySlider.offsetLeft;
        const walk = (x - startX) * 2;
        gallerySlider.scrollLeft = scrollLeft - walk;
    });
    
    gallerySlider.addEventListener('touchend', () => {
        isDown = false;
        
        // Snap to nearest item
        const items = document.querySelectorAll('.gallery-item');
        const itemWidth = items[0].offsetWidth + 16; // width + gap
        const currentScroll = gallerySlider.scrollLeft;
        const nearestItem = Math.round(currentScroll / itemWidth);
        
        gallerySlider.scrollTo({
            left: nearestItem * itemWidth,
            behavior: 'smooth'
        });
    });
}

// Add subtle rotation animation to hero logo on touch
const heroLogo = document.querySelector('.hero-logo');
if (heroLogo) {
    heroLogo.addEventListener('click', () => {
        heroLogo.style.animation = 'none';
        setTimeout(() => {
            heroLogo.style.animation = 'logo-bounce 0.5s ease';
        }, 10);
    });
}

// CSS animation for logo bounce (injected via JS)
const style = document.createElement('style');
style.textContent = `
    @keyframes logo-bounce {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.1); }
        75% { transform: scale(0.95); }
    }
    
    .schedule-item.visible {
        opacity: 1;
        transform: translateX(0);
    }
    
    .sponsor-item {
        opacity: 0;
        transform: scale(0.9);
        transition: all 0.6s ease;
    }
    
    .sponsor-item.visible {
        opacity: 1;
        transform: scale(1);
    }
`;
document.head.appendChild(style);



// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-based animations
const throttledParallax = throttle(() => {
    const scrolled = window.scrollY;
    heroElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', throttledParallax, { passive: true });

// Add touch feedback for all interactive elements
const interactiveElements = document.querySelectorAll('button, a, .dj-card');
interactiveElements.forEach(element => {
    element.addEventListener('touchstart', () => {
        element.style.opacity = '0.8';
    });
    
    element.addEventListener('touchend', () => {
        element.style.opacity = '1';
    });
});

// Console Easter egg
console.log('%c🎉 OITA IT MEET SOURCE! 🎉', 'font-size: 20px; color: #ff006e; font-weight: bold;');
console.log('%cLET\'S HANG OUT! 🎵💻🎉', 'font-size: 16px; color: #ffbe0b;');
console.log('%c10/17 FRI PM 21:00 - AM 3:00 @ CLUB FREEDOM', 'font-size: 14px; color: #ffffff;');