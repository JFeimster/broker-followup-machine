document.addEventListener('DOMContentLoaded', () => {
    // Sticky Nav Behavior
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Simple interaction: Simulate mock card activity on dashboard hover
    const dashboard = document.querySelector('.dashboard-panel');
    const tags = document.querySelectorAll('.mock-card .tag');

    if (dashboard) {
        dashboard.addEventListener('mouseenter', () => {
            tags.forEach(tag => {
                const originalText = tag.innerText;
                tag.innerText = "UPDATING...";
                tag.style.opacity = "0.7";
                
                setTimeout(() => {
                    tag.innerText = originalText;
                    tag.style.opacity = "1";
                }, 600);
            });
        });
    }
});
