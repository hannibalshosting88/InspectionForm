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

function toggleTextArea(radioId, textareaId) {
    const radio = document.getElementById(radioId);
    const textarea = document.getElementById(textareaId);

    if (radio.checked && radio.value === "Issues") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}

const radioGroups = [
    { radioId: "Issues_group001", textareaId: "Issues_group001-text" },
    { radioId: "Issues_group002", textareaId: "Issues_group002-text" },
    { radioId: "Issues_group003", textareaId: "Issues_group003-text" },
    { radioId: "Issues_group004", textareaId: "Issues_group004-text" },
    // Add more radio groups as needed
];

radioGroups.forEach(group => {
    const { radioId, textareaId } = group;
    const radio = document.getElementById(radioId);

    if (radio) {
        radio.addEventListener("change", function () {
            toggleTextArea(radioId, textareaId);
        });
    }
});
