/* --- Interactions & Animations --- */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Fade-in on Scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.fade-in-scroll');
    scrollElements.forEach(el => observer.observe(el));


    // 2. Music Player Toggle
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    // Set low volume initially
    bgMusic.volume = 0.5;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '🎵 Play Music';
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicBtn.innerHTML = '⏸ Pause Music';
                isPlaying = true;
            }).catch(error => {
                console.log("Audio play failed: ", error);
                alert("Please interact with the page first or check if audio file is present.");
            });
        }
    });


    // 3. Fun Question Interaction
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closePopupBtn = document.getElementById('close-popup');

    // Show Popup Function
    function showPopup(message) {
        popupText.innerText = message;
        popup.classList.remove('hidden');
    }

    // Close Popup
    closePopupBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // YES Button Click
    yesBtn.addEventListener('click', () => {
        showPopup("Correct answer. You have good taste. 💖");
        triggerConfetti();
    });

    // NO Button Hover (Desktop: Run Away)
    noBtn.addEventListener('mouseover', () => {
        // Only move on desktop/large screens where hover exists
        if (window.matchMedia("(min-width: 768px)").matches) {
            moveButton(noBtn);
        }
    });

    // NO Button Click (Mobile/Catch-all: Show Funny Message)
    noBtn.addEventListener('click', () => {
        showPopup("Wrong answer detected. System automatically corrected to YES. 😌✨");
    });

    function moveButton(btn) {
        const xX = Math.random() * 200 - 100; // -100 to 100
        const yY = Math.random() * 200 - 100; // -100 to 100
        btn.style.transform = `translate(${xX}px, ${yY}px)`;
    }


    // 4. Simple Confetti Effect for "Yes"
    function triggerConfetti() {
        const duration = 3000;
        const end = Date.now() + duration;

        // Simple confetti using CSS particles created dynamically
        // Implementation kept lightweight without external libraries
        createParticles();
    }

    function createParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '-10px';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            document.body.appendChild(particle);

            // Animate
            const duration = Math.random() * 2000 + 1000;
            const animation = particle.animate([
                { transform: `translate(0, 0)` },
                { transform: `translate(${Math.random() * 100 - 50}px, 100vh)` }
            ], {
                duration: duration,
                easing: 'linear',
                iterations: 1
            });

            animation.onfinish = () => particle.remove();
        }
    }

    const colors = ['#FFD1DC', '#E6A4B4', '#FFFDD0', '#E6E6FA', '#FFB7B2'];
});
