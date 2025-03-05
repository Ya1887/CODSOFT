// Skills Pie Chart Animation
function initializeSkillPies() {
    const circles = document.querySelectorAll('.skill__pie-circle');
    
    circles.forEach(circle => {
        const value = circle.getAttribute('data-value');
        const circumference = 2 * Math.PI * 45; // 45 is the radius
        const offset = circumference - (value / 100) * circumference;
        const numberElement = circle.closest('.skill__pie').querySelector('.skill__pie-number');
        
        // Set initial state
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // Animate the circle
                    circle.style.strokeDashoffset = offset;
                    // Update the number
                    numberElement.textContent = value + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(circle);
    });
}

document.addEventListener('DOMContentLoaded', initializeSkillPies); 