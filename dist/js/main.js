// Modern JavaScript with latest best practices

class PortfolioApp {
    constructor() {
        this.menuBtn = document.querySelector('.menu-btn');
        this.nav = document.querySelector('.nav');
        this.menuNav = document.querySelector('.menu-nav');
        this.navItems = document.querySelectorAll('.menu-nav__item');
        this.hamburger = document.querySelector('.menu-btn__burger');
        this.isMenuOpen = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.preloadCriticalResources();
        this.setupAccessibility();
    }
    
    setupEventListeners() {
        // Menu toggle
        this.menuBtn?.addEventListener('click', () => this.toggleMenu());
        this.menuBtn?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleMenu();
            }
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !this.nav?.contains(e.target) && 
                !this.menuBtn?.contains(e.target)) {
                this.toggleMenu();
            }
        });
        
        // Close menu on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.toggleMenu();
                this.menuBtn?.focus();
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
        
        // Enhanced external link handling
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            link.addEventListener('click', function(e) {
                this.classList.add('loading');
                
                // Remove loading state after a delay
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            });
        });
    }
    
    toggleMenu() {
        if (!this.isMenuOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }
    
    openMenu() {
        this.hamburger?.classList.add('open');
        this.nav?.classList.add('open');
        this.menuNav?.classList.add('open');
        this.navItems.forEach(item => item.classList.add('open'));
        this.menuBtn?.setAttribute('aria-expanded', 'true');
        
        // Focus management
        setTimeout(() => {
            const firstLink = this.nav?.querySelector('.menu-nav__link');
            firstLink?.focus();
        }, 300);
        
        this.isMenuOpen = true;
        document.body.style.overflow = 'hidden';
    }
    
    closeMenu() {
        this.hamburger?.classList.remove('open');
        this.nav?.classList.remove('open');
        this.menuNav?.classList.remove('open');
        this.navItems.forEach(item => item.classList.remove('open'));
        this.menuBtn?.setAttribute('aria-expanded', 'false');
        
        this.isMenuOpen = false;
        document.body.style.overflow = '';
    }
    
    setupIntersectionObserver() {
        // Enhanced intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
        
        // Observe specific sections
        document.querySelectorAll('.about__section').forEach(el => {
            observer.observe(el);
        });
        
        document.querySelectorAll('.projects__card').forEach(el => {
            observer.observe(el);
        });
        
        document.querySelectorAll('.education__item, .experience__item, .leadership__item').forEach(el => {
            observer.observe(el);
        });
    }
    
    preloadCriticalResources() {
        const criticalImages = [
            './img/model-1.jpg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
    
    setupAccessibility() {
        // Focus trap for mobile menu
        this.setupFocusTrap();
        
        // Announce page changes for screen readers
        this.announcePageChanges();
        
        // Enhanced keyboard navigation
        this.setupKeyboardNavigation();
    }
    
    setupFocusTrap() {
        const focusableElements = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';
        
        document.addEventListener('keydown', (e) => {
            if (!this.isMenuOpen || e.key !== 'Tab') return;
            
            const focusableContent = this.nav?.querySelectorAll(focusableElements);
            if (!focusableContent?.length) return;
            
            const firstFocusableElement = focusableContent[0];
            const lastFocusableElement = focusableContent[focusableContent.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        });
    }
    
    announcePageChanges() {
        // Create live region for screen reader announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
        
        // Announce page navigation
        const currentPage = document.querySelector('[aria-current="page"]')?.textContent;
        if (currentPage) {
            liveRegion.textContent = `${currentPage} page loaded`;
        }
    }
    
    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for cards and interactive elements
        document.querySelectorAll('.projects__card, .contact__card').forEach(card => {
            card.setAttribute('tabindex', '0');
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const primaryLink = card.querySelector('a');
                    primaryLink?.click();
                }
            });
        });
    }
}

// Theme management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }
    
    init() {
        this.applyTheme();
        this.setupThemeToggle();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }
    
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }
    
    setupThemeToggle() {
        // Add theme toggle button if needed
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle?.addEventListener('click', () => this.toggleTheme());
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        this.measurePageLoad();
        this.setupErrorTracking();
    }
    
    measurePageLoad() {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        });
    }
    
    setupErrorTracking() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript error:', e.error);
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
        });
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    new ThemeManager();
    new PerformanceMonitor();
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Web Vitals monitoring (if needed)
function measureWebVitals() {
    // Measure Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Measure First Input Delay (FID)
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
            console.log('FID:', entry.processingStart - entry.startTime);
        });
    }).observe({ entryTypes: ['first-input'] });
}

// Initialize Web Vitals monitoring
if (typeof PerformanceObserver !== 'undefined') {
    measureWebVitals();
}