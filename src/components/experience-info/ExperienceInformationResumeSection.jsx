import ResumeInformationUnitExperience from "./ResumeInformationUnitExperience";

function ExperienceInformationResumeSection({ location, startDate, endDate, description, company, position }) {
    return (
        <section id="experience-container">
            <h3>Experience</h3>
            <ResumeInformationUnitExperience 
                location={location} 
                startDate={startDate} 
                endDate={endDate} 
                company={company} 
                description={description} 
                position={position} 
            />
        </section>
    );
}

export default ExperienceInformationResumeSection;