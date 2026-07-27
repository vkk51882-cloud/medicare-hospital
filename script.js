// Modal Element Control
const modal = document.getElementById('appointmentModal');
const openBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const docButtons = document.querySelectorAll('.btn-book-doc');

// Open Modal from Main Green Button
openBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Open Modal directly from any Doctor's Card
docButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

// Close Modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('patientName').value;
    const doctor = document.getElementById('doctorSelect').value;
    const date = document.getElementById('appDate').value;

    alert(`Thank you ${name}! Your appointment with ${doctor} on ${date} is confirmed.`);

    this.reset();
    modal.style.display = 'none';
});

// FAQ Accordion Toggle functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        
        // Toggle icon (+ to -)
        const icon = question.querySelector('.faq-icon');
        if (faqItem.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});