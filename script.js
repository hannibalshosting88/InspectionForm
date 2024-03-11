let currentPage = 1;
const formSections = document.querySelectorAll('.form-section');

function nextPage() {
    if (currentPage < formSections.length) {
        formSections[currentPage - 1].classList.remove('active');
        currentPage++;
        formSections[currentPage - 1].classList.add('active');
    }
}

function prevPage() {
    if (currentPage > 1) {
        formSections[currentPage - 1].classList.remove('active');
        currentPage--;
        formSections[currentPage - 1].classList.add('active');
    }
}

function submitForm() {
    // You can implement form submission logic here
    alert('Form submitted successfully!');
}