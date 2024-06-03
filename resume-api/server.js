const express = require('express');
const app = express();
const port = 3000;
const resumeData = require('../json/resumeData.json');

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get unique job roles
app.get('/roles', (req, res) => {
    const roles = Array.from(new Set(resumeData.map(exp => exp.role)));
    res.json(roles);
});

// Endpoint to get skills based on job role
app.get('/skills', (req, res) => {
    const { role } = req.query;
    const skills = Array.from(new Set(resumeData.filter(exp => exp.role === role).flatMap(exp => exp.skills)));
    res.json(skills);
});

// Endpoint to get industries based on job role and skill
app.get('/industries', (req, res) => {
    const { role, skill } = req.query;
    const industries = Array.from(new Set(resumeData.filter(exp => exp.role === role && exp.skills.includes(skill)).map(exp => exp.industry)));
    res.json(industries);
});

// Endpoint to get resume data based on job role, skill, and industry
app.get('/resume', (req, res) => {
    const { role, skill, industry } = req.query;
    const filteredData = resumeData.filter(exp => exp.role === role && exp.skills.includes(skill) && exp.industry === industry);
    const years = filteredData.reduce((acc, exp) => acc + (new Date(exp.endDate).getFullYear() - new Date(exp.startDate).getFullYear()), 0);

    const resume = {
        aboutMe: 'Your about me text goes here.',
        skills: Array.from(new Set(filteredData.flatMap(exp => exp.skills))),
        experience: filteredData.map(exp => ({
            company: exp.company,
            startDate: exp.startDate,
            endDate: exp.endDate,
            role: exp.role,
            description: exp.description
        })),
        years: years
    };

    res.json(resume);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
