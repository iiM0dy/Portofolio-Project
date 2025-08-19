        function toggleMenu() {
            const navMenu = document.getElementById('nav-menu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            navMenu.classList.toggle('active');
            
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }

        function closeMenu() {
            const navMenu = document.getElementById('nav-menu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            const spans = mobileToggle.querySelectorAll('span');
            
            navMenu.classList.remove('active');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }

        document.addEventListener('click', function(e) {
            const header = document.getElementById('header');
            const navMenu = document.getElementById('nav-menu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            if (!header.contains(e.target) && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
