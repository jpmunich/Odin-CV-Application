import ResumeInformationUnitEducation from './ResumeInformationUnitEducation';

function EducationInformationResumeSection({ school, degree, startDate, endDate, location }) {
    return (
        <section id="education-container">
            <h3>Education</h3>
            <ResumeInformationUnitEducation 
                school={school} 
                degree={degree} 
                startDate={startDate} 
                endDate={endDate} 
                location={location} 
            />
        </section>
    );
}

export default EducationInformationResumeSection;