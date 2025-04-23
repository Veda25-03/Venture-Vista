// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Animate bars for hamburger to X transformation
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('active'));
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    
    // Reset hamburger icon
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.remove('active'));
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Skip for Book Now buttons and login button
    if (this.classList.contains('book-now-btn') || this.classList.contains('login-btn')) return;
    
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    // Skip for empty hrefs or just #
    if (targetId === '#' || targetId === '') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      navLinks.classList.remove('active');
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the navbar
        behavior: 'smooth'
      });
    }
  });
});

// Additional CSS for animated hamburger menu
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .menu-toggle {
      z-index: 1001;
    }
    
    .menu-toggle .bar {
      transition: var(--transition-fast);
    }
    
    .menu-toggle .bar.active:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    
    .menu-toggle .bar.active:nth-child(2) {
      opacity: 0;
    }
    
    .menu-toggle .bar.active:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  </style>
`);