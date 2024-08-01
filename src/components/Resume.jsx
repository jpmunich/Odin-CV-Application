import { useState } from 'react';
import PersonalInformationResumeSection from './personal-info/PersonalInformationResumeSection';
import '../styles/Resume.css';

function Resume({ personalInfo }) {
        return (
            <div className="resume-container">
                <PersonalInformationResumeSection name={personalInfo.name} email={personalInfo.email} phone={personalInfo.phone} location={personalInfo.location} />
                <section id="education-container">
                    <h3>Education</h3>
                    <ResumeInformationUnit />
                    <ResumeInformationUnit />
                </section>
                <section id="experience-container">
                    <h3>Experience</h3>
                    <ResumeInformationUnit />
                </section>
            </div>
        );
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