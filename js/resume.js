const resumeData = {
    developer: {
        javascript: {
            aboutMe: "Developer with expertise in JavaScript. Developed numerous web applications using React and Node.js.",
            skills: ["React", "Node.js", "Express", "MongoDB"],
            experience: "Worked on various full-stack projects, implementing interactive UIs and robust back-end services."
        },
        python: {
            aboutMe: "Developer with expertise in Python. Created backend services and data processing scripts.",
            skills: ["Flask", "Django", "Pandas", "NumPy"],
            experience: "Developed backend applications and automated data processing tasks for several projects."
        },
        projectManagement: {
            aboutMe: "Developer with experience in managing small development projects and leading teams.",
            skills: ["Project Planning", "Agile Methodologies", "Team Leadership"],
            experience: "Led development teams in successful project delivery, coordinating between stakeholders and developers."
        }
    },
    dataAnalyst: {
        javascript: {
            aboutMe: "Data Analyst with experience in data visualization using JavaScript libraries such as D3.js.",
            skills: ["D3.js", "Chart.js", "Data Analysis"],
            experience: "Created interactive data visualizations and performed extensive data analysis."
        },
        python: {
            aboutMe: "Data Analyst with proficiency in Python for data analysis, using libraries like Pandas and NumPy.",
            skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
            experience: "Conducted data analysis and created detailed reports and visualizations."
        },
        projectManagement: {
            aboutMe: "Data Analyst with experience in managing data projects and coordinating with stakeholders.",
            skills: ["Project Management", "Data Governance", "Stakeholder Communication"],
            experience: "Managed data projects, ensuring accurate data handling and effective communication with stakeholders."
        }
    },
    projectManager: {
        javascript: {
            aboutMe: "Project Manager with a technical background in JavaScript, enabling effective communication with development teams.",
            skills: ["Project Planning", "JavaScript Fundamentals", "Team Coordination"],
            experience: "Led development projects, ensuring successful delivery and effective team collaboration."
        },
        python: {
            aboutMe: "Project Manager with a technical background in Python, facilitating smooth project execution.",
            skills: ["Project Planning", "Python Fundamentals", "Risk Management"],
            experience: "Oversaw projects involving Python development, managing risks and ensuring timely delivery."
        },
        projectManagement: {
            aboutMe: "Project Manager with extensive experience in leading projects, managing timelines, and ensuring successful delivery.",
            skills: ["Project Planning", "Risk Management", "Team Leadership"],
            experience: "Successfully managed multiple projects, ensuring timely completion and stakeholder satisfaction."
        }
    }
};

function updateResume() {
    const jobRole = document.getElementById('jobRole').value;
    const skill = document.getElementById('skills').value;
    const aboutMeContent = document.getElementById('aboutMeContent');
    const skillsList = document.getElementById('skillsList');
    const experienceContent = document.getElementById('experienceContent');
    const yearsContent = document.getElementById('yearsContent');    
    
    if (resumeData[jobRole] && resumeData[jobRole][skill]) {
        const data = resumeData[jobRole][skill];
        
        aboutMeContent.textContent = data.aboutMe;
        skillsList.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');
        experienceContent.textContent = data.experience;
    } else {
        aboutMeContent.textContent = 'Please select a job role, skill, or industry.';
        skillsList.innerHTML = '';
        experienceContent.textContent = '';
    }
}

// Initialize resume content on page load
document.addEventListener('DOMContentLoaded', () => {
    updateResume();
});

function printResume() {
    window.print();
}
