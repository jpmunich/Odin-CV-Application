import { ResumeInformationUnitExperience } from "../Resume.jsx";

function ExperienceInformationResumeSection({ experienceInfo }) {
    return (
        <section id="experience-container">
            <h3>Experience</h3>
            <ResumeInformationUnitExperience location={experienceInfo.location} startDate={experienceInfo.startDate} endDate={experienceInfo.endDate} company={experienceInfo.company} description={experienceInfo.description} position={experienceInfo.position} />
        </section>
    );
}

export default ExperienceInformationResumeSection;