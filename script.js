
// WhatsApp contact function
function openWhatsApp() {
    const phoneNumber = '5538999937971'; // Format: country code + area code + number
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços elétricos.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Email contact function
function sendEmail() {
    const email = 'flashenergyservicos@gmail.com';
    const subject = encodeURIComponent('Solicitação de Orçamento - Serviços Elétricos');
    const body = encodeURIComponent('Olá João,\n\nGostaria de solicitar um orçamento para serviços elétricos.\n\nAguardo seu contato.\n\nObrigado!');
    const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
}

// Smooth scroll to services section
function scrollToServices() {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add transition to header
    header.style.transition = 'transform 0.3s ease-in-out';
});

// Contact form validation (if needed for future implementation)
function validateContactForm(form) {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (email && !isValidEmail(email.value)) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    
    if (message && message.value.trim().length < 10) {
        alert('Por favor, insira uma mensagem com pelo menos 10 caracteres.');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards for animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add click tracking for analytics (optional)
function trackButtonClick(buttonType) {
    // This function can be used to track button clicks for analytics
    console.log(`Button clicked: ${buttonType}`);
    
    // Example: Google Analytics event tracking
    // gtag('event', 'click', {
    //     'event_category': 'Button',
    //     'event_label': buttonType
    // });
}

// Phone number formatting
function formatPhoneNumber(phone) {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format as (XX) XXXXX-XXXX
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    
    return phone;
}

// Utility function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show a temporary success message
        showNotification('Copiado para a área de transferência!');
    }, function(err) {
        console.error('Erro ao copiar: ', err);
    });
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
