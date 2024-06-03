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
            const data = await response.json();
            document.getElementById('aboutMeContent').innerText = data.aboutMe;
            document.getElementById('skillsList').innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');
            document.getElementById('experienceContent').innerHTML = data.experience.map(exp => `
                <div class="experience-entry">
                    <h3>${exp.role} at ${exp.company}</h3>
                    <p>${exp.startDate} - ${exp.endDate}</p>
                    <p>${exp.description}</p>
                </div>
            `).join('');
            document.getElementById('yearsContent').innerText = `${data.years.toFixed(2)} years`;
        } else {
            console.error('Error fetching resume data');
        }
    } catch (error) {
        console.error('Error fetching resume data:', error);
    }
}
