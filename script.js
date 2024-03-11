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



//  *******************EDITING ARRAYS!!!!!!!!!!!!**************!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*****////



    // Arrays containing group names for each container on each page
    const groupNamesPage2_1 = ['GroupA', 'GroupB', 'GroupC'];
    const groupNamesPage2_2 = ['GroupX', 'GroupY'];

    const groupNamesPage3_1 = ['GroupAlpha', 'GroupBeta', 'GroupGamma', 'GroupDelta'];
    const groupNamesPage3_2 = ['GroupOne', 'GroupTwo'];

     // Arrays containing group names for each container on each new page
     const groupNamesPage4_1 = ['NewGroup1', 'NewGroup2'];
     const groupNamesPage4_2 = ['NewGroup3', 'NewGroup4'];
 
     const groupNamesPage5_1 = ['NewGroup5', 'NewGroup6'];
     const groupNamesPage5_2 = ['NewGroup7', 'NewGroup8'];

     // Arrays containing group names for each container on each new page
    const groupNamesPage6_1 = ['NewGroup9', 'NewGroup10'];
    const groupNamesPage6_2 = ['NewGroup11', 'NewGroup12'];

    const groupNamesPage7_1 = ['NewGroup13', 'NewGroup14'];
    const groupNamesPage7_2 = ['NewGroup15', 'NewGroup16'];
 
    // Variables for the number of groups in each container for each page
    const numGroupsPage2_1 = 2;
    const numGroupsPage2_2 = 2;

    const numGroupsPage3_1 = 2;
    const numGroupsPage3_2 = 2;

    // Variables for the number of groups in each container for each new page
    const numGroupsPage4_1 = 2;
    const numGroupsPage4_2 = 2;

    const numGroupsPage5_1 = 2;
    const numGroupsPage5_2 = 2;

     // Variables for the number of groups in each container for each new page
     const numGroupsPage6_1 = 2;
     const numGroupsPage6_2 = 2;
 
     const numGroupsPage7_1 = 2;
     const numGroupsPage7_2 = 2;
     




    ////!!!!!!!****************EDITING ARRAYS*********!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//




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

    
     // Containers where groups will be added for page 4
     const groupContainerPage4_1 = document.getElementById('groupContainerPage4_1');
     const groupContainerPage4_2 = document.getElementById('groupContainerPage4_2');
 
     // Generate HTML for each group on page 4 and append it to the containers
     for (let i = 0; i < numGroupsPage4_1; i++) {
         const groupName = groupNamesPage4_1[i];
         const groupHTMLPage4_1 = generateGroupHTML('groupContainerPage4_1', groupName, i + 1);
         groupContainerPage4_1.insertAdjacentHTML('beforeend', groupHTMLPage4_1);
     }
 
     for (let i = 0; i < numGroupsPage4_2; i++) {
         const groupName = groupNamesPage4_2[i];
         const groupHTMLPage4_2 = generateGroupHTML('groupContainerPage4_2', groupName, i + 1);
         groupContainerPage4_2.insertAdjacentHTML('beforeend', groupHTMLPage4_2);
     }
 
     // Containers where groups will be added for page 5
     const groupContainerPage5_1 = document.getElementById('groupContainerPage5_1');
     const groupContainerPage5_2 = document.getElementById('groupContainerPage5_2');
 
     // Generate HTML for each group on page 5 and append it to the containers
     for (let i = 0; i < numGroupsPage5_1; i++) {
         const groupName = groupNamesPage5_1[i];
         const groupHTMLPage5_1 = generateGroupHTML('groupContainerPage5_1', groupName, i + 1);
         groupContainerPage5_1.insertAdjacentHTML('beforeend', groupHTMLPage5_1);
     }
 
     for (let i = 0; i < numGroupsPage5_2; i++) {
         const groupName = groupNamesPage5_2[i];
         const groupHTMLPage5_2 = generateGroupHTML('groupContainerPage5_2', groupName, i + 1);
         groupContainerPage5_2.insertAdjacentHTML('beforeend', groupHTMLPage5_2);
     }


     
    // Containers where groups will be added for page 6
    const groupContainerPage6_1 = document.getElementById('groupContainerPage6_1');
    const groupContainerPage6_2 = document.getElementById('groupContainerPage6_2');

    // Generate HTML for each group on page 6 and append it to the containers
    for (let i = 0; i < numGroupsPage6_1; i++) {
        const groupName = groupNamesPage6_1[i];
        const groupHTMLPage6_1 = generateGroupHTML('groupContainerPage6_1', groupName, i + 1);
        groupContainerPage6_1.insertAdjacentHTML('beforeend', groupHTMLPage6_1);
    }

    for (let i = 0; i < numGroupsPage6_2; i++) {
        const groupName = groupNamesPage6_2[i];
        const groupHTMLPage6_2 = generateGroupHTML('groupContainerPage6_2', groupName, i + 1);
        groupContainerPage6_2.insertAdjacentHTML('beforeend', groupHTMLPage6_2);
    }

    // Containers where groups will be added for page 7
    const groupContainerPage7_1 = document.getElementById('groupContainerPage7_1');
    const groupContainerPage7_2 = document.getElementById('groupContainerPage7_2');

    // Generate HTML for each group on page 7 and append it to the containers
    for (let i = 0; i < numGroupsPage7_1; i++) {
        const groupName = groupNamesPage7_1[i];
        const groupHTMLPage7_1 = generateGroupHTML('groupContainerPage7_1', groupName, i + 1);
        groupContainerPage7_1.insertAdjacentHTML('beforeend', groupHTMLPage7_1);
    }

    for (let i = 0; i < numGroupsPage7_2; i++) {
        const groupName = groupNamesPage7_2[i];
        const groupHTMLPage7_2 = generateGroupHTML('groupContainerPage7_2', groupName, i + 1);
        groupContainerPage7_2.insertAdjacentHTML('beforeend', groupHTMLPage7_2);
    }

    // Function to handle file uploads and display them
    function handleFileUpload(inputId, containerId) {
        const fileInput = document.getElementById(inputId);
        const fileContainer = document.getElementById(containerId);

        fileInput.addEventListener('change', function () {
            const files = fileInput.files;

            // Clear existing content in the container
            fileContainer.innerHTML = '';

            // Display each uploaded file
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                // Create elements for displaying the file and comments
                const fileDiv = document.createElement('div');
                const fileImage = document.createElement('img');
                const commentsInput = document.createElement('textarea');

                // Set up image source, styles, and attributes
                fileImage.src = URL.createObjectURL(file);
                fileImage.style.maxWidth = '100%';
                fileImage.style.maxHeight = '200px';
                commentsInput.placeholder = 'Add comments...';

                // Append elements to the container
                fileDiv.appendChild(fileImage);
                fileDiv.appendChild(commentsInput);
                fileContainer.appendChild(fileDiv);
            }
        });
    }

    // Handle photo uploads
    handleFileUpload('photoUpload', 'photoDisplayContainer');

    // Handle video uploads
    handleFileUpload('videoUpload', 'videoDisplayContainer');

});




