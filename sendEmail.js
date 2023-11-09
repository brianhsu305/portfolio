const send = document.getElementById('contact-form');
const emailkey = 'user_C90iwOTsZIXz1u6iQBppj';

emailjs.init(emailkey);
send.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'portfolio_template', e.target,emailkey)
        .then(() => {
            alert('email has been sent!');
        }, (error) => {
            console.log('EMAIL FAILED SENDING...', error);
    });
    e.target.reset();
})