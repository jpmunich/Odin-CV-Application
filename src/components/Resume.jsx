import PersonalInformationResumeSection from './personal-info/PersonalInformationResumeSection';
import EducationInformationResumeSection from './education-info/EducationInformationResumeSection';
import ExperienceInformationResumeSection from './experience-info/ExperienceInformationResumeSection';
import '../styles/Resume.css';

function Resume({ personalInfo, experienceInfo, educationUnits }) {
        return (
            <div className="resume-container">
                <PersonalInformationResumeSection 
                    name={personalInfo.name} 
                    email={personalInfo.email} 
                    phone={personalInfo.phone} 
                    location={personalInfo.location} 
                />
                <EducationInformationResumeSection 
                    educationUnits={educationUnits} 
                />
                <ExperienceInformationResumeSection 
                    company={experienceInfo.company}
                    position={experienceInfo.position}
                    startDate={experienceInfo.startDate}
                    endDate={experienceInfo.endDate}
                    location={experienceInfo.location}
                    description={experienceInfo.description} 
                />
            </div>
        );
    }

export { Resume };