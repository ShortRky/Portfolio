document.addEventListener('DOMContentLoaded', () => {
    // =====================
    // Data Configuration
    // =====================
    const portfolioData = {
        skills: [
            'Web Development', 'UI/UX Design', 'Project Management', 'Technical Writing',
            'Public Speaking', 'Teamwork', 'Problem Solving', 'Critical Thinking',
            'Time Management', 'Leadership', 'Creativity', 'Adaptability', 'Communication',
            'Attention to Detail', 'Self-Motivation', 'Organization', 'Research',
            'Analytical Skills', 'Interpersonal Skills', 'Conflict Resolution',
            'Decision Making', 'Negotiation', 'Networking', 'Presentation Skills',
            'Sales', 'Marketing', 'Customer Service', 'Social Media', 'Content Management',
            'Data Analysis', 'Database Management', 'Programming', 'Software Development',
            'Game Development', 'Cybersecurity'
        ],
        achievements: [
            'Built and launched a personal portfolio website',
            'Completed a cybersecurity certification',
            'Led a successful content creation project',
            'Developed a personal game in Unity',
            'Created and managed a social media marketing campaign'
        ],
        projects: [
            {
                title: 'Open Source Clock',
                brief: 'Interactive time visualization tool',
                details: 'Built with HTML Canvas and JavaScript',
                url: 'https://shortrky.github.io/Clock-website/',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API']
            },
            {
                title: 'Random Math Generator',
                brief: 'Educational math problem generator',
                details: 'Dynamic problem creation with solution validation',
                url: 'https://shortrky.github.io/Random-Math-Gen/',
                tech: ['JavaScript', 'Algorithm Design', 'UI/UX']
            },
            {
                title: 'Demo Site Project',
                brief: 'Example of my Skills',
                details: 'Click ME!!',
                url: 'https://shortrky.github.io/W.A.V.E/',
                tech: ['Responsive Design', 'CSS Animations', 'DOM Manipulation']
            },
            {
                title: 'SkillSync',
                brief: 'Just another example',
                details: 'Click to See!',
                url: 'https://shortrky.github.io/Animated---Webscreen-saver/',
                tech: ['Responsive Designs', 'Smooth Animation', 'Simple']
            },    
            {
                title: 'Functions explanations',
                brief: 'Explains functions',
                details: 'Find out',
                url: 'https://shortrky.github.io/Functions/',
                tech: ['in-depth', 'Responsive Designs', 'Simple']
            },
            {
                title: 'Example Website Carusel',
                brief: 'Simple Carusel',
                details: 'Click to see',
                url: 'https://github.com/ShortRky/NIIIISHAAA',
                tech: ['Responsive Designs', 'Simple', 'Easy to use']
            },

        ],
        hobbies: [
            'Photography', 'Open Source Contributing', 'Creative Writing',
            'Drawing', 'Gaming', 'Content Creation', 'Watching Anime',
            'Reading', 'Learning New Skills', 'Cooking', 'Working Out',
            'Personal Projects'
        ]
    };

    // =====================
    // DOM Elements
    // =====================
    const domRef = {
        skillsGrid: document.querySelector('.skills-grid'),
        achievementsGrid: document.querySelector('.achievements-grid'),
        projectGrid: document.querySelector('.project-grid'),
        hobbiesContainer: document.querySelector('.hobbies-container'),
        navLinks: document.querySelectorAll('.nav-links a')
    };

    // =====================
    // Utility Functions
    // =====================
    const createElement = (tag, className, content) => {
        const element = document.createElement(tag);
        element.className = className;
        if (content) element.innerHTML = content;
        return element;
    };

    const animateOnScroll = (elements, threshold = 0.1) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold });

        elements.forEach(element => observer.observe(element));
    };

    // =====================
    // Content Population
    // =====================
    const populateSkills = () => {
        domRef.skillsGrid.append(...portfolioData.skills.map(skill => {
            const card = createElement('div', 'skill-card', `<h3>${skill}</h3>`);
            card.style.setProperty('--hue', Math.random() * 360);
            return card;
        }));
    };

    const populateAchievements = () => {
        domRef.achievementsGrid.append(...portfolioData.achievements.map(achievement => {
            const card = createElement('div', 'achievement-card', `<p>${achievement}</p>`);
            card.style.animationDelay = `${Math.random() * 0.5}s`;
            return card;
        }));
    };

    const populateProjects = () => {
        domRef.projectGrid.append(...portfolioData.projects.map(project => {
            const card = createElement('div', 'project-card');
            card.innerHTML = `
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <div class="project-content">
                        <div class="project-brief">
                            <h3>${project.title}</h3>
                            <p>${project.brief}</p>
                            <div class="tech-stack">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
                        </div>
                        <div class="project-hover">
                            <p>${project.details}</p>
                            <div class="project-links">
                                <span class="demo-link">Live Demo →</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;
            return card;
        }));
    };

    const populateHobbies = () => {
        domRef.hobbiesContainer.append(...portfolioData.hobbies.map(hobby => {
            const item = createElement('div', 'hobby-item', hobby);
            item.style.setProperty('--hue', Math.random() * 360);
            return item;
        }));
    };

    // =====================
    // Event Handlers
    // =====================
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const initEventListeners = () => {
        domRef.navLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty(
                '--scroll-pos',
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            );
        });
    };

    // =====================
    // Initialization
    // =====================
    const initPortfolio = () => {
        populateSkills();
        populateAchievements();
        populateProjects();
        populateHobbies();
        initEventListeners();
        
        animateOnScroll([
            ...domRef.skillsGrid.children,
            ...domRef.achievementsGrid.children,
            ...domRef.projectGrid.children,
            ...domRef.hobbiesContainer.children
        ]);
    };

    // Start the battle!
    initPortfolio();
});