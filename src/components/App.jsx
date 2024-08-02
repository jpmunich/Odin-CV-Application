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

  const handleChange = (e) => {
    const property = e.target.id;
    setPersonalInfo({
      ...personalInfo,
      [property]: e.target.value
    });
  }

  return (
    <div className="ui-container">
        <div className="form-container">
            <PersonalInformationForm onChange={handleChange} name={personalInfo.name} email={personalInfo.email} phone={personalInfo.phone} location={personalInfo.location} />
            <EducationInformationForm />
            <ExperienceInformationForm />
        </div>
      <Resume personalInfo={personalInfo} />
    </div>
  )
}

export default App
