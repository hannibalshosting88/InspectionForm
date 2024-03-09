let currentSection = 0;
const formSections = document.querySelectorAll('.form-section');

function nextPage() {
    if (currentSection < formSections.length - 1) {
        formSections[currentSection].classList.remove('active');
        currentSection++;
        formSections[currentSection].classList.add('active');
    }
}

function prevPage() {
    if (currentSection > 0) {
        formSections[currentSection].classList.remove('active');
        currentSection--;
        formSections[currentSection].classList.add('active');
    }
}

function submitForm() {
    // You can add validation here before submitting the form

    // Simulate form submission (replace this with actual form submission logic)
    alert("Form submitted successfully!");
    formSections[0].classList.add('active');
    currentSection = 0;
}
