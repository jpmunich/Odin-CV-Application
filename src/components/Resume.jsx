import PersonalInformationResumeSection from './personal-info/PersonalInformationResumeSection';
import EducationInformationResumeSection from './education-info/EducationInformationResumeSection';
import ExperienceInformationResumeSection from './experience-info/ExperienceInformationResumeSection';
import '../styles/Resume.css';

function Resume({ personalInfo, educationInfo, experienceInfo }) {
        return (
            <div className="resume-container">
                <PersonalInformationResumeSection name={personalInfo.name} email={personalInfo.email} phone={personalInfo.phone} location={personalInfo.location} />
                <EducationInformationResumeSection educationInfo={educationInfo} />
                <ExperienceInformationResumeSection experienceInfo={experienceInfo} />
            </div>
        );
    }

function ResumeInformationUnitEducation({ school, degree, location, startDate, endDate }) {
    return (
        <div className="resume-info-container">
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <h4>{school}</h4>
                <p>{degree}</p>
            </div>
        </div>
    );
}

function ResumeInformationUnitExperience({ company, startDate, endDate, location, description, position }) {
    return (
        <div className='resume-info-container'>
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <h4>{company}</h4>
                <p>{position}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export { Resume, ResumeInformationUnitEducation, ResumeInformationUnitExperience };