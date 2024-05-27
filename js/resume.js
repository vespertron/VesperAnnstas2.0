const resumeData = {
    developer: {
        javascript: "Developer with expertise in JavaScript. Developed numerous web applications using React and Node.js.",
        python: "Developer with expertise in Python. Created backend services and data processing scripts.",
        projectManagement: "Developer with experience in managing small development projects and leading teams."
    },
    dataAnalyst: {
        javascript: "Data Analyst with experience in data visualization using JavaScript libraries such as D3.js.",
        python: "Data Analyst with proficiency in Python for data analysis, using libraries like Pandas and NumPy.",
        projectManagement: "Data Analyst with experience in managing data projects and coordinating with stakeholders."
    },
    projectManager: {
        javascript: "Project Manager with a technical background in JavaScript, enabling effective communication with development teams.",
        python: "Project Manager with a technical background in Python, facilitating smooth project execution.",
        projectManagement: "Project Manager with extensive experience in leading projects, managing timelines, and ensuring successful delivery."
    }
};

function updateResume() {
    const jobRole = document.getElementById('jobRole').value;
    const skill = document.getElementById('skills').value;
    const resumeContent = document.getElementById('resumeContent');
    
    resumeContent.innerHTML = `<p>${resumeData[jobRole][skill]}</p>`;
}

// Initialize resume content on page load
document.addEventListener('DOMContentLoaded', updateResume);


// Print as PDF
function printResume() {
    window.print();
}