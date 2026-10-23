
/* Internship sample data */

const internships = [
    {
        id: "INT-101",
        title: "Frontend Intern",
        domain: "Full Stack Development",
        mode: "Remote",
        location: "India",
        skills: ["HTML", "CSS", "JavaScript"],
        openings: 3
    },
    {
        id: "INT-102",
        title: "API Engineering Intern",
        domain: "Full Stack Development",
        mode: "Hybrid",
        location: "Pune",
        skills: ["Node.js", "SQL", "Testing"],
        openings: 2
    },
    {
        id: "INT-103",
        title: "UI/UX Intern",
        domain: "UI/UX",
        mode: "Remote",
        location: "India",
        skills: ["Figma", "Research", "Accessibility"],
        openings: 1
    },
    {
        id: "INT-104",
        title: "Data Analyst Intern",
        domain: "Data Analytics",
        mode: "On-site",
        location: "Bengaluru",
        skills: ["Excel", "SQL", "Data visualisation"],
        openings: 2
    },
    {
        id: "INT-105",
        title: "Security Operations Intern",
        domain: "Cyber Security",
        mode: "Remote",
        location: "India",
        skills: ["Linux", "Logs", "Networking"],
        openings: 1
    }
];


/* Search elements */

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("search-input");

const domainFilter = document.getElementById("domain-filter");

const modeFilter = document.getElementById("mode-filter");

const clearButton = document.getElementById("clear-button");

const internshipList = document.getElementById("internship-list");

const resultMessage = document.getElementById("result-message");

const emptyMessage = document.getElementById("empty-message");


/* Internship details dialog */

const internshipDialog = document.getElementById("internship-dialog");

const closeDialogButton = document.getElementById("close-dialog");

const dialogCloseButton = document.getElementById("dialog-close-button");

const applyButton = document.getElementById("apply-button");


/* Internship detail elements */

const detailId = document.getElementById("detail-id");

const detailDomain = document.getElementById("detail-domain");

const detailMode = document.getElementById("detail-mode");

const detailLocation = document.getElementById("detail-location");

const detailSkills = document.getElementById("detail-skills");

const detailOpenings = document.getElementById("detail-openings");


/* Application dialog */

const applicationDialog = document.getElementById("application-dialog");

const closeApplicationButton =
    document.getElementById("close-application");

const cancelApplicationButton =
    document.getElementById("cancel-application");

const applicationForm =
    document.getElementById("application-form");

const applicationInternshipTitle =
    document.getElementById("application-internship-title");

const applicationMessage =
    document.getElementById("application-message");

const applicantName =
    document.getElementById("applicant-name");

const applicantEmail =
    document.getElementById("applicant-email");

const applicantPhone =
    document.getElementById("applicant-phone");

const applicantResume =
    document.getElementById("applicant-resume");

const applicantCoverLetter =
    document.getElementById("applicant-cover-letter");

const submitApplicationButton =
    document.getElementById("submit-application");


/* Selected internship */

let selectedInternship = null;


/* Display internships */

function displayInternships(internshipData) {

    internshipList.replaceChildren();

    resultMessage.textContent =
        `${internshipData.length} internship(s) found`;

    emptyMessage.hidden = internshipData.length !== 0;

    internshipData.forEach(function (internship) {

        const card = document.createElement("article");

        card.className = "internship-card";

        const title = document.createElement("h3");

        title.textContent = internship.title;

        const id = document.createElement("p");

        id.textContent = `ID: ${internship.id}`;

        const domain = document.createElement("p");

        domain.textContent = `Domain: ${internship.domain}`;

        const mode = document.createElement("p");

        mode.textContent = `Work Mode: ${internship.mode}`;

        const location = document.createElement("p");

        location.textContent = `Location: ${internship.location}`;

        const skillsHeading = document.createElement("p");

        skillsHeading.textContent = "Required Skills:";

        const skillsList = document.createElement("ul");

        skillsList.className = "skills-list";

        internship.skills.forEach(function (skill) {

            const skillItem = document.createElement("li");

            skillItem.textContent = skill;

            skillsList.appendChild(skillItem);

        });

        const openings = document.createElement("p");

        openings.textContent = `Openings: ${internship.openings}`;

        const actions = document.createElement("div");

        actions.className = "card-actions";

        const viewButton = document.createElement("button");

        viewButton.type = "button";

        viewButton.className = "btn-primary";

        viewButton.textContent = "View Details";

        viewButton.addEventListener("click", function () {

            openInternshipDetails(internship);

        });

        actions.appendChild(viewButton);

        card.append(
            title,
            id,
            domain,
            mode,
            location,
            skillsHeading,
            skillsList,
            openings,
            actions
        );

        internshipList.appendChild(card);

    });

}


/* Open internship details */

function openInternshipDetails(internship) {

    selectedInternship = internship;

    detailId.textContent = internship.id;

    detailDomain.textContent = internship.domain;

    detailMode.textContent = internship.mode;

    detailLocation.textContent = internship.location;

    detailOpenings.textContent = internship.openings;

    detailSkills.replaceChildren();

    internship.skills.forEach(function (skill) {

        const skillItem = document.createElement("li");

        skillItem.textContent = skill;

        detailSkills.appendChild(skillItem);

    });

    internshipDialog.showModal();

}


/* Close internship details */

function closeInternshipDetails() {

    if (internshipDialog.open) {

        internshipDialog.close();

    }

}


/* Search internships */

function searchInternships() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const selectedDomain = domainFilter.value;

    const selectedMode = modeFilter.value;

    const filteredInternships = internships.filter(function (internship) {

        const searchableText = [
            internship.id,
            internship.title,
            internship.domain,
            internship.mode,
            internship.location,
            ...internship.skills
        ].join(" ").toLowerCase();

        const matchesSearch =
            searchableText.includes(searchText);

        const matchesDomain =
            selectedDomain === "" ||
            internship.domain === selectedDomain;

        const matchesMode =
            selectedMode === "" ||
            internship.mode === selectedMode;

        return (
            matchesSearch &&
            matchesDomain &&
            matchesMode
        );

    });

    displayInternships(filteredInternships);

}


/* Search form */

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    searchInternships();

});


/* Domain filter */

domainFilter.addEventListener("change", searchInternships);


/* Work mode filter */

modeFilter.addEventListener("change", searchInternships);


/* Reset filters */

clearButton.addEventListener("click", function () {

    searchInput.value = "";

    domainFilter.value = "";

    modeFilter.value = "";

    searchInternships();

});


/* Close details buttons */

closeDialogButton.addEventListener(
    "click",
    closeInternshipDetails
);

dialogCloseButton.addEventListener(
    "click",
    closeInternshipDetails
);


/* Close details when clicking backdrop */

internshipDialog.addEventListener("click", function (event) {

    if (event.target === internshipDialog) {

        closeInternshipDetails();

    }

});


/* Open application form */

applyButton.addEventListener("click", function () {

    if (!selectedInternship) {

        return;

    }

    applicationInternshipTitle.textContent =
        selectedInternship.title;

    applicationMessage.textContent = "";

    applicationMessage.className = "";

    applicationForm.reset();

    closeInternshipDetails();

    applicationDialog.showModal();

});


/* Close application dialog */

function closeApplicationDialog() {

    if (applicationDialog.open) {

        applicationDialog.close();

    }

}


closeApplicationButton.addEventListener(
    "click",
    closeApplicationDialog
);

cancelApplicationButton.addEventListener(
    "click",
    closeApplicationDialog
);


/* Close application dialog using backdrop */

applicationDialog.addEventListener("click", function (event) {

    if (event.target === applicationDialog) {

        closeApplicationDialog();

    }

});


/* Display application feedback */

function showApplicationMessage(message, type) {

    applicationMessage.textContent = message;

    applicationMessage.className = type;

}


/* Validate resume */

function validateResume() {

    const file = applicantResume.files[0];

    if (!file) {

        showApplicationMessage(
            "Please upload your resume.",
            "error"
        );

        return false;

    }

    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {

        showApplicationMessage(
            "Resume must be smaller than 2 MB.",
            "error"
        );

        return false;

    }

    const fileName = file.name.toLowerCase();

    if (!fileName.endsWith(".pdf")) {

        showApplicationMessage(
            "Please upload a PDF resume.",
            "error"
        );

        return false;

    }

    if (
        file.type &&
        file.type !== "application/pdf"
    ) {

        showApplicationMessage(
            "The selected file must be a PDF.",
            "error"
        );

        return false;

    }

    return true;

}


/* Validate phone */

function validatePhone() {

    const phone = applicantPhone.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        showApplicationMessage(
            "Enter a valid 10-digit phone number.",
            "error"
        );

        applicantPhone.focus();

        return false;

    }

    return true;

}


/* Submit application */

applicationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    showApplicationMessage("", "");

    /* Browser required-field validation */

    if (!applicationForm.checkValidity()) {

        applicationForm.reportValidity();

        return;

    }

    /* Check phone */

    if (!validatePhone()) {

        return;

    }

    /* Check resume */

    if (!validateResume()) {

        return;

    }

    /* Selected internship */

    if (!selectedInternship) {

        showApplicationMessage(
            "Please select an internship first.",
            "error"
        );

        return;

    }

    /*
       Frontend demonstration only.

       No backend API is connected.
       No application is stored.
    */

    showApplicationMessage(
        "Form validation successful! " +
        "The application is not saved yet. " +
        "Backend integration will be added later.",
        "success"
    );

});


/* Initial display */

displayInternships(internships);