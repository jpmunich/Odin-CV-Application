import { useState } from "react";
import { Resume } from "./Resume";
import PersonalInformationForm from "./personal-info/PersonalInformationForm";
import EducationInformationForm from "./education-info/EducationInformationForm";
import ExperienceInformationForm from "./experience-info/ExperienceInformationForm";
import "../styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    address: "22008 43 Dr SE",
    location: "Münich, Germany 56079",
    email: "concernedape08@gmail.com",
    phone: "(555)-555-5555"
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: ""
  })

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: ""
  })

  const handleChange = (e) => {
    const property = e.target.id;
    setPersonalInfo({
      ...personalInfo,
      [property]: e.target.value
    });
  }

  const handleSave = () => {
    const schoolValue = document.getElementById("school").value;
    const degreeValue = document.getElementById("degree").value;
    const startDateValue = document.getElementById("education-start-date").value;
    const endDateValue = document.getElementById("education-end-date").value;
    const locationValue = document.getElementById("education-location").value;

    setEducationInfo({
      school: schoolValue,
      degree: degreeValue,
      startDate: startDateValue,
      endDate: endDateValue,
      location: locationValue
    })
  }

  const handleSaveExperience = () => {
    const companyValue = document.getElementById("company").value;
    const positionValue = document.getElementById("position").value;
    const startDateValue = document.getElementById("experience-start-date").value;
    const endDateValue = document.getElementById("experience-end-date").value;
    const locationValue = document.getElementById("experience-location").value;
    const descriptionValue = document.getElementById("experience-description").value;

    setExperienceInfo({
      company: companyValue,
      position: positionValue,
      startDate: startDateValue,
      endDate: endDateValue,
      location: locationValue,
      description: descriptionValue
    })
  }

  const handleCancelEducation = () => {
    document.getElementById("school").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("education-start-date").value = "";
    document.getElementById("education-end-date").value = "";
    document.getElementById("education-location").value = "";
    
    setEducationInfo({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
    })
  }

  const handleCancelExperience = () => {
    document.getElementById("company").value = "";
    document.getElementById("position").value = "";
    document.getElementById("experience-start-date").value = "";
    document.getElementById("experience-end-date").value = "";
    document.getElementById("experience-location").value = "";
    document.getElementById("experience-description").value = "";

    setExperienceInfo({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: ""
    })
  }

  return (
    <div className="ui-container">
        <div className="form-container">
            <PersonalInformationForm onChange={handleChange} name={personalInfo.name} email={personalInfo.email} phone={personalInfo.phone} location={personalInfo.location} />
            <EducationInformationForm onSave={handleSave} onCancel={handleCancelEducation}/>
            <ExperienceInformationForm onSave={handleSaveExperience} onCancel={handleCancelExperience}/>
        </div>
      <Resume personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
    </div>
  )
}

export default App
