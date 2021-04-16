const send = document.getElementById('contact-form');

emailjs.init("user_C90iwOTsZIXz1u6iQBppj");
send.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'portfolio_template', e.target,'user_C90iwOTsZIXz1u6iQBppj')
        .then(() => {
            alert('email has been sent!');
        }, (error) => {
            console.log('EMAIL FAILED SENDING...', error);
    });
    e.target.reset();
})