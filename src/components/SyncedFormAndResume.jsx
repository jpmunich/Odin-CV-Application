import { useState } from 'react';
import { Resume } from "./Resume";
import { v4 as uuidv4 } from 'uuid'; // package that generate unique keys
import PersonalInformationForm from "./personal-info/PersonalInformationForm";
import EducationInformationForm from "./education-info/EducationInformationForm";
import ExperienceInformationForm from "./experience-info/ExperienceInformationForm";
import ResumeInformationUnitEducation from './education-info/ResumeInformationUnitEducation';

function SyncedFormAndResume() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    address: "22008 43 Dr SE",
    location: "Münich, Germany 56079",
    email: "concernedape08@gmail.com",
    phone: "(555)-555-5555"
  });

  const [educationInfo, setEducationInfo] = useState([]);
  const [selectedEducationUnit, setSelectedEducationUnit] = useState({});
  const [queuedSelectedEducationUnit, setQueuedSelectedEducationUnit] = useState({});
  const [isPreexistingEducationUnitSelected, setIsPreexistingEducationUnitSelected] = useState(false);
  const [isEducationUnitSelected, setIsEducationUnitSelected] = useState(false);
  const [educationUnitHeaders, setEducationUnitHeaders] = useState([]);
  

  const [experienceInfo, setExperienceInfo] = useState([{}]);
  const [selectedExperienceUnit, setSelectedExperienceUnit] = useState({});
  const [queuedSelectedExperienceUnit, setQueuedSelectedExperienceUnit] = useState({});
  const [isExperienceUnitSelected, setIsExperienceUnitSelected] = useState(false);
  const [isPreexistingExperienceUnitSelected, setIsPreexistingExperienceUnitSelected] = useState(false);
  const [ExperienceUnitHeaders, setExperienceUnitHeaders] = useState([]);

  const handlePersonalInfoChange = (e) => {
    const property = e.target.id;
    setPersonalInfo({
      ...personalInfo,
      [property]: e.target.value
    });
  };

  const handleSetIsPreexistingEducationUnitSelectedTrue = () => setIsPreexistingEducationUnitSelected(true);
  const handleSetIsPreexistingEducationUnitSelectedFalse = () => setIsPreexistingEducationUnitSelected(false);

  const handleSaveEducation = () => {
    const schoolValue = document.getElementById("school").value;

    const unselectedEduUnits = educationInfo.filter(unit => {
      return unit.school !== "" && unit !== selectedEducationUnit
    });

    if (!isPreexistingEducationUnitSelected) {
      if (schoolValue !== "") {
        setEducationInfo([
          ...unselectedEduUnits,
          queuedSelectedEducationUnit
        ]);
      };
    } else {
      if (schoolValue !== "") {
        setEducationInfo([
          ...unselectedEduUnits,
          queuedSelectedEducationUnit
        ]);
      };
    }
  };

  const handleSelectNewEducationUnit = (e) => {
    setSelectedEducationUnit(educationInfo.find(unit => {
      return unit.school === e.target.textContent;
    }));
    setQueuedSelectedEducationUnit(educationInfo.find(unit => {
      return unit.school === e.target.textContent;
    }));
  }
  
  const eduSave = () => {
    const schoolValue = document.getElementById("school").value;
    const unselectedEduHeaders = educationUnitHeaders.filter(unit => {
      return unit.school !== "" && unit.name !== selectedEducationUnit.school
    });
    console.log(isPreexistingEducationUnitSelected)

    if (!isPreexistingEducationUnitSelected && schoolValue !== "") {
        setEducationUnitHeaders([
            ...educationUnitHeaders,
            {
                name: queuedSelectedEducationUnit.school
            }
        ])
    } else {
        setEducationUnitHeaders([
            ...unselectedEduHeaders,
            {
              name: queuedSelectedEducationUnit.school,
            }
        ])
    }
    handleSetIsPreexistingEducationUnitSelectedFalse();
    toggleIsEducationUnitSelected();
}

const eduSaves = educationUnitHeaders.map(unit => {
    return (
        <div 
            onClick={handleSelectNewEducationUnit} 
            key={uuidv4()}
        >
            <h3 onClick={() => {toggleIsEducationUnitSelected(); handleSetIsPreexistingEducationUnitSelectedTrue();}}
                className='education-information-header-container' 
            >{unit.name}</h3>
        </div>
    );
});

  const toggleIsEducationUnitSelected = () => setIsEducationUnitSelected(!isEducationUnitSelected);    

  const updateInputValuesEducation = (e) => {
    if (e.target.id === "school" || e.target.id === "degree") {
      const property = e.target.id;
      setQueuedSelectedEducationUnit({
        ...queuedSelectedEducationUnit,
        [property]: e.target.value
      })
    } else if (e.target.id === "education-start-date") {
      setQueuedSelectedEducationUnit({
        ...queuedSelectedEducationUnit,
        startDate: e.target.value
      })
    } else if (e.target.id === "education-end-date") {
      setQueuedSelectedEducationUnit({
        ...queuedSelectedEducationUnit,
        endDate: e.target.value
      })
    } else if (e.target.id === "education-location") {
      setQueuedSelectedEducationUnit({
        ...queuedSelectedEducationUnit,
        location: e.target.value
      })
    }
  }

  const createEduUnit = () => {
    setSelectedEducationUnit({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
      }
    )

    setQueuedSelectedEducationUnit({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
      }
    )

    setEducationInfo([
        ...educationInfo,
        {
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: ""
        }
    ])
  }

  const ResumeInformationUnitsEducation = educationInfo.map(unit => {
      return (
          <ResumeInformationUnitEducation
            key={uuidv4()}  
            school={unit.school} 
            degree={unit.degree} 
            startDate={unit.startDate} 
            endDate={unit.endDate} 
            location={unit.location}
          />
      );
  });

  const handleSaveExperience = () => {
    const companyValue = document.getElementById("company").value;
    const positionValue = document.getElementById("position").value;
    const startDateValue = document.getElementById("experience-start-date").value;
    const endDateValue = document.getElementById("experience-end-date").value;
    const locationValue = document.getElementById("experience-location").value;
    const descriptionValue = document.getElementById("experience-description").value;

    setExperienceInfo([
      ...experienceInfo,
      {
      company: companyValue,
      position: positionValue,
      startDate: startDateValue,
      endDate: endDateValue,
      location: locationValue,
      description: descriptionValue
    }]);
  };

  const handleDeleteEducation = () => {
    document.getElementById("school").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("education-start-date").value = "";
    document.getElementById("education-end-date").value = "";
    document.getElementById("education-location").value = "";
    
    setEducationInfo([{
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
    }]);
  };

  const handleDeleteExperience = () => {
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
  };

  return (
    <div className="ui-container">
        <div className="form-container">
            <PersonalInformationForm 
              onChange={handlePersonalInfoChange} 
              name={personalInfo.name} 
              email={personalInfo.email} 
              phone={personalInfo.phone} 
              location={personalInfo.location} 
            />
            <EducationInformationForm 
              onSave={handleSaveEducation} 
              onDelete={handleDeleteEducation} 
              createEduUnit={createEduUnit}
              inputValues={queuedSelectedEducationUnit}
              onUpdateInputValues={updateInputValuesEducation}
              isEducationUnitSelected={isEducationUnitSelected}
              toggleIsEducationUnitSelected={toggleIsEducationUnitSelected}
              eduSave={eduSave}
              eduSaves={eduSaves}
              />
            <ExperienceInformationForm 
              onSave={handleSaveExperience} 
              onDelete={handleDeleteExperience} 
            />
        </div>
      <Resume 
        personalInfo={personalInfo} 
        experienceInfo={experienceInfo[0]} 
        educationUnits={ResumeInformationUnitsEducation}
      />
    </div>
  );
};

export default SyncedFormAndResume;