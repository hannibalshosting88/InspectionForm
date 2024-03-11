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


                //           ARRRGGHE THERE BE DRAGONS 
                                    //                    ABOVE THIS LINE IS THE BASIC PAGE FUNCTIONALITY DON'T TOUCH!!!!!!!!!!!!!!












document.addEventListener('DOMContentLoaded', function () {
    // Function to generate HTML for each group on page 2 and page 3
    function generateGroupHTML(containerId, groupName, groupId) {
        return `
            <div class="columnpage2 radio-group" id="${containerId}_${groupName}_${groupId}">
                <div class="radio-group-heading">${groupName}</div>
                <label for="Good_${groupName}_${containerId}_${groupId}">Good</label>
                <input type="radio" id="Good_${groupName}_${containerId}_${groupId}" name="group_${groupName}_${containerId}_${groupId}" value="Good">
                <label for="N/A_${groupName}_${containerId}_${groupId}">N/A</label>
                <input type="radio" id="N/A_${groupName}_${containerId}_${groupId}" name="group_${groupName}_${containerId}_${groupId}" value="N/A">
                <label for="Issues_${groupName}_${containerId}_${groupId}">Issues</label>
                <input type="radio" id="Issues_${groupName}_${containerId}_${groupId}" name="group_${groupName}_${containerId}_${groupId}" value="Issues">
            </div>
            <div class="columnpage2">
                <textarea id="Description_${groupName}_${containerId}_${groupId}" name="Description_${groupName}_${containerId}_${groupId}" placeholder="Describe issues...."></textarea>
            </div>
        `;
    }

    // Arrays containing group names for each container on each page
    const groupNamesPage2_1 = ['GroupA', 'GroupB', 'GroupC'];
    const groupNamesPage2_2 = ['GroupX', 'GroupY'];

    const groupNamesPage3_1 = ['GroupAlpha', 'GroupBeta', 'GroupGamma', 'GroupDelta'];
    const groupNamesPage3_2 = ['GroupOne', 'GroupTwo'];

    // Variables for the number of groups in each container for each page
    const numGroupsPage2_1 = 3;
    const numGroupsPage2_2 = 2;

    const numGroupsPage3_1 = 4;
    const numGroupsPage3_2 = 2;

    // Containers where groups will be added for page 2
    const groupContainerPage2_1 = document.getElementById('groupContainerPage2_1');
    const groupContainerPage2_2 = document.getElementById('groupContainerPage2_2');

    // Generate HTML for each group on page 2 and append it to the containers
    for (let i = 0; i < numGroupsPage2_1; i++) {
        const groupName = groupNamesPage2_1[i];
        const groupHTMLPage2_1 = generateGroupHTML('groupContainerPage2_1', groupName, i + 1);
        groupContainerPage2_1.insertAdjacentHTML('beforeend', groupHTMLPage2_1);
    }

    for (let i = 0; i < numGroupsPage2_2; i++) {
        const groupName = groupNamesPage2_2[i];
        const groupHTMLPage2_2 = generateGroupHTML('groupContainerPage2_2', groupName, i + 1);
        groupContainerPage2_2.insertAdjacentHTML('beforeend', groupHTMLPage2_2);
    }

    // Containers where groups will be added for page 3
    const groupContainerPage3_1 = document.getElementById('groupContainerPage3_1');
    const groupContainerPage3_2 = document.getElementById('groupContainerPage3_2');

    // Generate HTML for each group on page 3 and append it to the containers
    for (let i = 0; i < numGroupsPage3_1; i++) {
        const groupName = groupNamesPage3_1[i];
        const groupHTMLPage3_1 = generateGroupHTML('groupContainerPage3_1', groupName, i + 1);
        groupContainerPage3_1.insertAdjacentHTML('beforeend', groupHTMLPage3_1);
    }

    for (let i = 0; i < numGroupsPage3_2; i++) {
        const groupName = groupNamesPage3_2[i];
        const groupHTMLPage3_2 = generateGroupHTML('groupContainerPage3_2', groupName, i + 1);
        groupContainerPage3_2.insertAdjacentHTML('beforeend', groupHTMLPage3_2);
    }
});