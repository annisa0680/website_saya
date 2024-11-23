document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    // Animate statistics on scroll
    const stats = document.querySelectorAll('.stat-box h3');
    const animateStats = () => {
        stats.forEach(stat => {
            const value = parseInt(stat.innerText);
            let current = 0;
            const increment = value / 100;
            const updateCounter = () => {
                if(current < value) {
                    current += increment;
                    stat.innerText = Math.round(current) + '+';
                    setTimeout(updateCounter, 10);
                } else {
                    stat.innerText = value + '+';
                }
            }
            updateCounter();
        });
    }

    // Intersection Observer for statistics animation
    const statsSection = document.querySelector('.statistics');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(statsSection);
        }
    });

    observer.observe(statsSection);

    // Add animation class to elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if(elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => { 
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;
// Lanjutkan dengan Logika penanganan formulir
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Subscribe:', subscribe);
// Reset the form fields
    form.reset();
});

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    const isSubscribed = subscribe.checked;

Swal.fire({
    title: 'Are you sure?',
    text: 'You want to submit the form and subscribe to the newsletter?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, submit it!'
}).then((result) => {
    if (result.isConfirmed) {
    // Mengubah status checkbox menjadi sesuai dengan hasil konfirmasi
        subscribe.checked = isSubscribed;

        Swal.fire({
            title: 'Submitted!',
            text: `You ${subscribe.checked ? 'have': 'have not'} subscribed to the newsletter.`,
            icon: 'success'
    });

    // Lanjutkan dengan Logika penanganan formulir 
        console.log('Email:', 'example@example.com'); 
        console.log('Message:', 'This is a test message.'); 
        console.log('Subscribe:', subscribe.checked);
    } else {
    // Jika dibatalkan, kembalikan checkbox ke status awal
        subscribe.checked = !isSubscribed;
        }
    });
});

// sweetalert2 submit button
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Validasi form
        if (!email || !message) {
            Swal.fire({
            title: 'Oops!',
            text: 'Please fill in all the required fields.',
            icon: 'error'
            });
        return;

        }
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to submit the form ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Submitted!',
                    text: `You ${subscribe ? 'have': 'have not'} submit form.`,
                    icon: 'success'
                });
                //Lanjutkan dengan Logika penanganan formulir
                console.log('Email:', email);
                console.log('Message:', message);
                console.log('subscribe:', subscribe);
                // Reset the form fields
                form.reset();
            } else {
            // Jika dibatalkan, kembalikan checkbox ke status awal
                document.getElementById('subscribe').checked = subscribe;
            }
        });
    });

