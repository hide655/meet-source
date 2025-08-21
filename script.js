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
});

// Fixed CTA Button visibility
let lastScrollY = window.scrollY;
const fixedCTA = document.querySelector('.fixed-cta');
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    // Show fixed CTA after scrolling past hero
    if (currentScrollY > heroBottom) {
        fixedCTA.classList.add('visible');
    } else {
        fixedCTA.classList.remove('visible');
    }
    
    lastScrollY = currentScrollY;
});

// Smooth scroll to CTA section when clicking fixed button
const fixedCTAButton = document.querySelector('.fixed-cta-button');
const ctaButton = document.querySelector('.cta-button');

fixedCTAButton?.addEventListener('click', () => {
    document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
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

// Add subtle rotation animation to hero title on touch
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('click', () => {
        heroTitle.style.animation = 'none';
        setTimeout(() => {
            heroTitle.style.animation = 'title-wiggle 0.5s ease';
        }, 10);
    });
}

// CSS animation for title wiggle (injected via JS)
const style = document.createElement('style');
style.textContent = `
    @keyframes title-wiggle {
        0%, 100% { transform: perspective(500px) rotateY(-5deg); }
        25% { transform: perspective(500px) rotateY(-10deg); }
        75% { transform: perspective(500px) rotateY(0deg); }
    }
`;
document.head.appendChild(style);

// Ticket button interactions
const ticketButtons = document.querySelectorAll('.cta-button, .fixed-cta-button');
ticketButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => ripple.remove(), 600);
        
        // Placeholder for ticket purchase action
        console.log('Ticket purchase clicked');
        // In production, this would open a ticket purchase modal or redirect
    });
});

// Add ripple animation styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .cta-button, .fixed-cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

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