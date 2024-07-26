import { useState } from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <div className='resume-container'>
            <ResumeHeader />
            <ResumeEducationSection />
            <ResumeExperienceSection />
        </div>
    );
}

function ResumeHeader() {
    return (
        <div id="header-container">
            <header id="name-container">
                <h1>Hello World</h1>
            </header>
            <section id="header-info-container">
                <div id="header-info-top-column">
                    <p>22008 43rd Dr. SE  |</p>
                    <p>Münich, Germany 56079  |</p>
                    <p>(555)-555-5555</p>
                </div>
                <div id="header-info-bottom-column">
                    <p>concernedape08@gmail.com</p>
                </div>
            </section>
        </div>
    );
}

function ResumeEducationSection() {
    return (
        <section id="education-container">
            <h3>Education</h3>
            <ResumeInformationUnit />
            <ResumeInformationUnit />
        </section>
    );
}

function ResumeExperienceSection() {
    return (
        <section id="experience-container">
            <h3>Experience</h3>
            <ResumeInformationUnit />
        </section>
    )
}

function ResumeInformationUnit() {
    return (
        <div id="resume-info-container">
            <div>
                <p>04/2007 - 05/2009</p>
                <p>Münich, Germany</p>
            </div>
            <div>
                <h4>Carnegie Mellon University</h4>
                <p>Bachelors in Computer Science</p>
            </div>
        </div>
    );
}

export default Resume;
