<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday Akka!</title>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #fff3e0, #ffecb3); /* Warm yellow/orange tones for sister vibes */
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
            color: #5d4037; /* Brown text fits well with yellow */
        }
        
        /* Password Modal */
        .password-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 236, 179, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 100;
            transition: opacity 0.5s ease;
        }
        
        .password-content {
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
            animation: bounceIn 1s forwards;
        }
        
        .password-content h2 {
            font-family: 'Dancing Script', cursive;
            font-size: 32px;
            margin-bottom: 20px;
            color: #f57f17; /* Darker yellow/orange */
        }
        
        .password-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ffe082;
            border-radius: 10px;
            margin-bottom: 15px;
            font-size: 16px;
            text-align: center;
            outline: none;
            transition: border-color 0.3s;
        }
        
        .password-input:focus {
            border-color: #f57f17;
        }
        
        .submit-btn {
            background: #fbc02d;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s, transform 0.2s;
        }
        
        .submit-btn:hover {
            background: #f9a825;
            transform: scale(1.05);
        }
        
        /* Welcome Screen */
        .welcome-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #fff3e0, #ffecb3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99;
            transition: opacity 0.8s ease;
        }
        
        .welcome-message {
            font-family: 'Dancing Script', cursive;
            font-size: 48px;
            color: #e65100;
            text-align: center;
            animation: pulse 2s infinite, float 3s ease-in-out infinite;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        
        /* Main Content */
        .container {
            width: 100%;
            max-width: 900px;
            padding: 20px;
            margin-top: 50px;
        }
        
        .tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        
        .tab {
            background: rgba(255, 255, 255, 0.7);
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            color: #f57f17;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .tab:hover {
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-3px);
        }
        
        .tab.active {
            background: white;
            color: #e65100;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .content-area {
            background: white;
            border-radius: 20px;
            padding: 30px;
            min-height: 400px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease forwards;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* Letter Tab */
        .letter {
            padding: 20px;
            background: #fff8e1;
            border-radius: 15px;
            border: 2px dashed #ffe082;
            margin-bottom: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .letter-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .letter h3 {
            font-family: 'Dancing Script', cursive;
            font-size: 28px;
            color: #f57f17;
        }
        
        .letter-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.8s ease;
        }
        
        .letter.expanded .letter-content {
            max-height: 1000px; /* Increased height for longer letter */
        }
        
        .letter-content p {
            margin-bottom: 15px;
            line-height: 1.6;
        }

        /* Music Tab */
        .song {
            background: #fff3e0;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .song-icon {
            font-size: 24px;
            color: #ff9800;
        }
        
        .song-info h4 {
            font-size: 18px;
            margin-bottom: 5px;
        }
        
        .song-info p {
            color: #888;
            font-size: 14px;
        }
        
        /* Notes Tab */
        .note {
            background: #fff8e1;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 4px solid #ffca28;
            display: flex;
            align-items: flex-start;
        }
        
        .note p {
            margin: 0;
        }

        /* Gallery Tab */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .gallery-item {
            border-radius: 10px;
            overflow: hidden;
            height: 200px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            background-color: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .gallery-item:hover {
            transform: scale(1.05);
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .gallery-placeholder {
            color: #aaa;
            font-style: italic;
        }
        
        /* Decorative Elements */
        .heart, .teddy-bear, .star {
            position: absolute;
            z-index: -1;
            opacity: 0.2;
            pointer-events: none;
        }
        
        .heart {
            color: #ffca28;
            font-size: 24px;
            animation: float 6s ease-in-out infinite;
        }
        
        .teddy-bear {
            font-size: 32px;
            animation: float 8s ease-in-out infinite;
        }
        
        .star {
            font-size: 20px;
            animation: float 7s ease-in-out infinite;
        }
        
        /* Animations */
        @keyframes bounceIn {
            0% { transform: scale(0.8); opacity: 0; }
            60% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .welcome-message {
                font-size: 36px;
            }
            
            .tabs {
                flex-direction: column;
                align-items: center;
            }
            
            .tab {
                width: 100%;
                justify-content: center;
            }
            
            .gallery {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <!-- Password Modal -->
    <div class="password-modal" id="passwordModal">
        <div class="password-content">
            <h2>Enter the secret code</h2>
            <input type="password" class="password-input" id="passwordInput" placeholder="Hint: childhood name? (akka)">
            <button class="submit-btn" id="submitPassword">Unlock Surprise</button>
        </div>
    </div>
    
    <!-- Welcome Screen -->
    <div class="welcome-screen" id="welcomeScreen">
        <h1 class="welcome-message">Happy Birthday Dakshinya! 💛</h1>
        <p style="font-size: 1.2rem; color: #5d4037; opacity: 0.8;">The Best Sister in the World</p>
    </div>
    
    <!-- Main Content -->
    <div class="container" id="mainContent" style="display: none;">
        <div class="tabs">
            <button class="tab active" data-tab="letter">
                <span>💌</span> Letter
            </button>
            <button class="tab" data-tab="music">
                <span>🎵</span> Music
            </button>
            <button class="tab" data-tab="notes">
                <span>📝</span> Notes
            </button>
            <button class="tab" data-tab="gallery">
                <span>📸</span> Gallery
            </button>
        </div>
        
        <div class="content-area">
            <!-- Letter Tab -->
            <div class="tab-content active" id="letter">
                <h2>My Dearest Sister</h2>
                <div class="letter" id="birthdayLetter">
                    <div class="letter-header">
                        <h3>A Letter For You</h3>
                        <span>👇 Click to open</span>
                    </div>
                    <div class="letter-content">
                        <p><strong>My Dearest Sister,</strong></p>
                        <p>Happy Birthday to the most beautiful soul I know. 💛</p>
                        <p>I don’t even know where to begin… I’m just so incredibly thankful to have you in my life. Thank you for “adopting” me as your brother and giving me a place in your world. That means more to me than I can ever explain.</p>
                        <p>The world honestly feels a little brighter today because it’s your day. You deserve all the happiness, success, peace, and everything good this universe can offer. You’re not just special — you’re rare.</p>
                        <p>Thank you for being my safe place. On days when I call you feeling low, confused, or just completely off… somehow we always end up laughing like idiots. You turn my worst moods into the best moments. And I’ll always be grateful for that.</p>
                        <p>You’ve made me think twice in so many situations. You’ve shown me different perspectives when my mind was stuck in one direction. The way you think, the way you handle things, the confidence you carry — it’s powerful. You’re one of the strongest and most confident women I’ve ever seen. And the best part? You influence people without even trying. You leave a positive mark wherever you go.</p>
                        <p>I need you to always remember something  if you ever feel unbothered, ignored, or even slightly worthless, you know exactly where your place is. Come to me. Always. I’ll be right here. No conditions. No judgment. Just us.</p>
                        <p>Please take care of yourself. Protect your happiness. Choose peace. You deserve a life that feels light, not heavy.</p>
                        <p>I’m always going to be here for you — cheering for you, supporting you, annoying you, and standing by you no matter what.</p>
                        <p>Happy Birthday akka once again. You’re the best. And I’m truly lucky to call you my sister.</p>
                        <p>Always here,<br><strong>thambiii</strong></p>
                    </div>
                </div>
            </div>
            
            <!-- Music Tab -->
            <div class="tab-content" id="music">
                <h2>Our Vibe</h2>
                <div class="song">
                    <div class="song-icon">🎵</div>
                    <div class="song-info">
                        <h4>Rettai Kadire</h4>
                        <p>"Come a long way..." 🎶</p>
                    </div>
                    <!-- You could add an audio element here if you have the file URL -->
                    <!-- <audio controls src="path/to/song.mp3"></audio> -->
                </div>
            </div>
            
            <!-- Notes Tab -->
            <div class="tab-content" id="notes">
                <h2>Reminders for You 💛</h2>
                <div class="note">
                    <p>Eat well. Sleep well. Take care of yourself. The world needs you strong. 💛</p>
                </div>
                <div class="note">
                    <p>Do everything with confidence. You were never made to doubt yourself.</p>
                </div>
                <div class="note">
                    <p>Stay motivated. You’re built for bigger things than you even realize.</p>
                </div>
                <div class="note">
                    <p>Thambi always got your back. You’re never alone.</p>
                </div>
                <div class="note">
                    <p>Walk like you know your worth — because you do.</p>
                </div>
                <div class="note">
                    <p>Protect your peace. Choose progress. Keep shining.</p>
                </div>
            </div>
            
            <!-- Gallery Tab -->
            <div class="tab-content" id="gallery">
                <h2>Memories</h2>
                <div class="gallery">
                    <!-- Placeholder images since user said "photos will give you later" -->
                    <div class="gallery-item">
                        <div class="gallery-placeholder">Photo 1</div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-placeholder">Photo 2</div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-placeholder">Photo 3</div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-placeholder">Photo 4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Decorative elements -->
    <div id="decorative-container"></div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Password check
            const passwordModal = document.getElementById('passwordModal');
            const welcomeScreen = document.getElementById('welcomeScreen');
            const mainContent = document.getElementById('mainContent');
            const passwordInput = document.getElementById('passwordInput');
            const submitPassword = document.getElementById('submitPassword');
            
            // Password set to 'akka' as a default safe option
            const SECRET_CODE = 'akka';
            
            submitPassword.addEventListener('click', function() {
                if (passwordInput.value.toLowerCase().trim() === SECRET_CODE) {
                    passwordModal.style.opacity = '0';
                    setTimeout(() => {
                        passwordModal.style.display = 'none';
                        welcomeScreen.style.display = 'flex';
                        
                        setTimeout(() => {
                            welcomeScreen.style.opacity = '0';
                            setTimeout(() => {
                                welcomeScreen.style.display = 'none';
                                mainContent.style.display = 'block';
                            }, 800);
                        }, 3000); // Show welcome screen a bit longer
                    }, 500);
                } else {
                    passwordInput.value = '';
                    passwordInput.placeholder = 'Try "akka" ...';
                    passwordInput.style.borderColor = '#e65100';
                    setTimeout(() => {
                        passwordInput.style.borderColor = '#ffe082';
                    }, 1500);
                }
            });
            
            // Allow Enter key to submit password
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    submitPassword.click();
                }
            });
            
            // Tab switching
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === targetTab) {
                            content.classList.add('active');
                        }
                    });
                });
            });
            
            // Expandable letter
            const letter = document.getElementById('birthdayLetter');
            letter.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
            
            // Add floating decorative elements
            const container = document.getElementById('decorative-container');
            const symbols = ['💛', '🎂', '✨', '🎈', '🌻'];
            
            function addFloatingElements() {
                for (let i = 0; i < 20; i++) {
                    const el = document.createElement('div');
                    el.classList.add('star'); // Using star class for generic float animation
                    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
                    el.style.left = Math.random() * 100 + '%';
                    el.style.top = Math.random() * 100 + '%';
                    el.style.fontSize = (Math.random() * 20 + 15) + 'px';
                    el.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
                    el.style.animationDelay = Math.random() * 5 + 's';
                    el.style.opacity = Math.random() * 0.5 + 0.1;
                    document.body.appendChild(el);
                }
            }
            
            addFloatingElements();
        });
    </script>
</body>
</html>
