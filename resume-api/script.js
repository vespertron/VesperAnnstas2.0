document.addEventListener('DOMContentLoaded', () => {
    populateJobRoles();
});

async function populateJobRoles() {
    const jobRoleSelect = document.getElementById('jobRole');
    try {
        const response = await fetch('/roles');
        if (response.ok) {
            const roles = await response.json();
            jobRoleSelect.innerHTML = roles.map(role => `<option value="${role}">${role}</option>`).join('');
            updateSkills();
        }
    } catch (error) {
        console.error('Error fetching job roles:', error);
    }
}

async function updateSkills() {
    const jobRole = document.getElementById('jobRole').value;
    const skillsSelect = document.getElementById('skills');
    try {
        const response = await fetch(`/skills?role=${jobRole}`);
        if (response.ok) {
            const skills = await response.json();
            skillsSelect.innerHTML = skills.map(skill => `<option value="${skill}">${skill}</option>`).join('');
            updateIndustries();
        }
    } catch (error) {
        console.error('Error fetching skills:', error);
    }
}

async function updateIndustries() {
    const jobRole = document.getElementById('jobRole').value;
    const skill = document.getElementById('skills').value;
    const industrySelect = document.getElementById('industry');
    try {
        const response = await fetch(`/industries?role=${jobRole}&skill=${skill}`);
        if (response.ok) {
            const industries = await response.json();
            industrySelect.innerHTML = industries.map(industry => `<option value="${industry}">${industry}</option>`).join('');
            updateResume();
        }
    } catch (error) {
        console.error('Error fetching industries:', error);
    }
}

async function updateResume() {
    const jobRole = document.getElementById('jobRole').value;
    const skill = document.getElementById('skills').value;
    const industry = document.getElementById('industry').value;
    try {
        const response = await fetch(`/resume?role=${jobRole}&skill=${skill}&industry=${industry}`);
        if (response.ok) {
            const resume = await response.json();
            document.getElementById('aboutMeContent').textContent = resume.aboutMe;
            document.getElementById('skillsList').innerHTML = resume.skills.map(skill => `<li>${skill}</li>`).join('');
            document.getElementById('experienceContent').innerHTML = resume.experience.map(exp => 
                `<div class="experience-entry">
                    <h3>${exp.company}</h3>
                    <p>${exp.startDate} - ${exp.endDate}</p>
                    <p>${exp.role}</p>
                    <p>${exp.description}</p>
                </div>`
            ).join('');
            document.getElementById('yearsContent').textContent = `${resume.years.toFixed(1)} years`;
        } else {
            document.getElementById('aboutMeContent').textContent = '';
            document.getElementById('skillsList').innerHTML = '';
            document.getElementById('experienceContent').innerHTML = '';
            document.getElementById('yearsContent').textContent = '0 years';
        }
    } catch (error) {
        console.error('Error fetching resume:', error);
    }
}

function printResume() {
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print Resume</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css">');
    printWindow.document.write('</head><body >');
    printWindow.document.write(resumeContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
