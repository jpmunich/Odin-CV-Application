import { ResumeInformationUnitEducation } from '../Resume.jsx';

function EducationInformationResumeSection({ educationInfo }) {
    return (
        <section id="education-container">
            <h3>Education</h3>
            <ResumeInformationUnitEducation school={educationInfo.school} degree={educationInfo.degree} startDate={educationInfo.startDate} endDate={educationInfo.endDate} location={educationInfo.location} />
        </section>
    );
}

export default EducationInformationResumeSection;