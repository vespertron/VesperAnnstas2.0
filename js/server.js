const express = require('express');
const app = express();
const port = 3000;

const resumeData = require('../json/resumeData.json');

app.get('/roles', (req, res) => {
    const roles = [...new Set(resumeData.experiences.map(exp => exp.role))];
    res.json(roles);
});

app.get('/skills', (req, res) => {
    const { role } = req.query;
    const skills = [...new Set(resumeData.experiences.filter(exp => exp.role === role).flatMap(exp => exp.skills))];
    res.json(skills);
});

app.get('/industries', (req, res) => {
    const { role, skill } = req.query;
    const industries = [...new Set(resumeData.experiences.filter(exp => exp.role === role && exp.skills.includes(skill)).map(exp => exp.industry))];
    res.json(industries);
});

app.get('/resume', (req, res) => {
    const { role, skill, industry } = req.query;
    const experiences = resumeData.experiences.filter(exp => 
        exp.role === role &&
        exp.skills.includes(skill) &&
        exp.industry === industry
    );

    if (experiences.length > 0) {
        const totalYears = experiences.reduce((total, exp) => {
            const start = new Date(exp.startDate);
            const end = new Date(exp.endDate);
            const years = (end - start) / (1000 * 60 * 60 * 24 * 365);
            return total + years;
        }, 0);

        res.json({
            aboutMe: experiences[0].description,
            skills: experiences[0].skills,
            experience: experiences,
            years: totalYears
        });
    } else {
        res.status(404).json({ message: 'No matching experience found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
