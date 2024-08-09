import { useState } from 'react';
import { Resume } from "./Resume";
import { v4 as uuidv4 } from 'uuid'; // package that generate unique keys
import PersonalInformationForm from "./personal-info/PersonalInformationForm";
import EducationInformationForm from "./education-info/EducationInformationForm";
import ExperienceInformationForm from "./experience-info/ExperienceInformationForm";
import ResumeInformationUnitEducation from './education-info/ResumeInformationUnitEducation';
import ResumeInformationUnitExperience from './experience-info/ResumeInformationUnitExperience';

function SyncedFormAndResume() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    address: "22008 43 Dr SE",
    location: "Münich, Germany 56079",
    address: "22008 43rd Dr. SE",
    email: "concernedape08@gmail.com",
    phone: "(555)-555-5555"
  });

  const [educationInfo, setEducationInfo] = useState([]);
  const [selectedEducationUnit, setSelectedEducationUnit] = useState({});
  const [queuedSelectedEducationUnit, setQueuedSelectedEducationUnit] = useState({});
  const [isPreexistingEducationUnitSelected, setIsPreexistingEducationUnitSelected] = useState(false);
  const [isEducationUnitSelected, setIsEducationUnitSelected] = useState(false);
  const [educationUnitHeaders, setEducationUnitHeaders] = useState([]);
  

  const [experienceInfo, setExperienceInfo] = useState([]);
  const [selectedExperienceUnit, setSelectedExperienceUnit] = useState({});
  const [queuedSelectedExperienceUnit, setQueuedSelectedExperienceUnit] = useState({});
  const [isExperienceUnitSelected, setIsExperienceUnitSelected] = useState(false);
  const [isPreexistingExperienceUnitSelected, setIsPreexistingExperienceUnitSelected] = useState(false);
  const [experienceUnitHeaders, setExperienceUnitHeaders] = useState([]);

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

    if (schoolValue !== "") {
      setEducationInfo([
        ...unselectedEduUnits,
        queuedSelectedEducationUnit
      ]);
    };

    const unselectedEduHeaders = educationUnitHeaders.filter(unit => {
      return unit.school !== "" && (unit.school !== selectedEducationUnit.school
      || unit.degree !== selectedEducationUnit.degree || unit.startDate !== selectedEducationUnit.startDate
      || unit.endDate !== selectedEducationUnit.endDate || unit.location !== selectedEducationUnit.location)
    });

    if (!isPreexistingEducationUnitSelected && schoolValue !== "") {
        setEducationUnitHeaders([
            ...educationUnitHeaders,
            {
                school: queuedSelectedEducationUnit.school,
                degree: queuedSelectedEducationUnit.degree,
                startDate: queuedSelectedEducationUnit.startDate,
                endDate: queuedSelectedEducationUnit.endDate,
                location: queuedSelectedEducationUnit.location
            }
        ])
    } else {
        setEducationUnitHeaders([
            ...unselectedEduHeaders,
            {
              school: queuedSelectedEducationUnit.school,
              degree: queuedSelectedEducationUnit.degree,
              startDate: queuedSelectedEducationUnit.startDate,
              endDate: queuedSelectedEducationUnit.endDate,
              location: queuedSelectedEducationUnit.location
            }
        ])
    }
    handleSetIsPreexistingEducationUnitSelectedFalse();
    toggleIsEducationUnitSelected();
  };

  const handleSelectNewEducationUnit = (e) => {
    setSelectedEducationUnit(educationInfo.find(unit => {
      return unit.school === e.target.textContent;
    }));
    setQueuedSelectedEducationUnit(educationInfo.find(unit => {
      return unit.school === e.target.textContent;
    }));
  }

const educationHeaders = educationUnitHeaders.map(unit => {
    return (
        <div 
            onClick={handleSelectNewEducationUnit} 
            key={uuidv4()}
        >
            <h3 onClick={() => {toggleIsEducationUnitSelected(); handleSetIsPreexistingEducationUnitSelectedTrue();}}
                className='education-information-header-container' 
            >{unit.school}</h3>
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
          <ResumeInformationUnitEducation key={uuidv4()} educationInfo={unit} />
      );
  });


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

  /* Experience 
    Section Begins
    Here!! */

  const toggleIsExperienceUnitSelected = () => setIsExperienceUnitSelected(!isExperienceUnitSelected);
  const handleSetIsPreexistingExperienceUnitSelectedTrue = () => setIsPreexistingExperienceUnitSelected(true);
  const handleSetIsPreexistingExperienceUnitSelectedFalse = () => setIsPreexistingExperienceUnitSelected(false);

  const createExperienceUnit = () => {
    setSelectedExperienceUnit({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: ""
      }
    )

    setQueuedSelectedExperienceUnit({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: ""
      }
    )

    setExperienceInfo([
        ...experienceInfo,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: ""
        }
    ])
  }

  const updateInputValuesExperience = (e) => {
    if (e.target.id === "company" || e.target.id === "position") {
      const property = e.target.id;
      setQueuedSelectedExperienceUnit({
        ...queuedSelectedExperienceUnit,
        [property]: e.target.value
      })
    } else if (e.target.id === "experience-start-date") {
      setQueuedSelectedExperienceUnit({
        ...queuedSelectedExperienceUnit,
        startDate: e.target.value
      })
    } else if (e.target.id === "experience-end-date") {
      setQueuedSelectedExperienceUnit({
        ...queuedSelectedExperienceUnit,
        endDate: e.target.value
      })
    } else if (e.target.id === "experience-location") {
      setQueuedSelectedExperienceUnit({
        ...queuedSelectedExperienceUnit,
        location: e.target.value
      })
    } else if (e.target.id === "experience-description") {
      setQueuedSelectedExperienceUnit({
        ...queuedSelectedExperienceUnit,
        description: e.target.value
      })
    }
  }

  const handleSaveExperience = () => {
    const companyValue = document.getElementById("company").value;

    const unselectedExperienceUnits = experienceInfo.filter(unit => {
      return unit.company !== "" && unit !== selectedExperienceUnit
    });

    if (companyValue !== "") {
      setExperienceInfo([
        ...unselectedExperienceUnits,
        queuedSelectedExperienceUnit
      ]);
    };

    const unselectedExperienceHeaders = experienceUnitHeaders.filter(unit => {
      return unit.company !== "" && (unit.company !== selectedExperienceUnit.company 
        || unit.position !== selectedExperienceUnit.position || unit.startDate !== selectedExperienceUnit.startDate
        || unit.endDate !== selectedExperienceUnit.endDate || unit.location !== selectedExperienceUnit.location
        || unit.description !== selectedExperienceUnit.description)
    });

    if (!isPreexistingExperienceUnitSelected && companyValue !== "") {
        setExperienceUnitHeaders([
            ...experienceUnitHeaders,
            {
                company: queuedSelectedExperienceUnit.company,
                position: queuedSelectedExperienceUnit.position,
                startDate: queuedSelectedExperienceUnit.startDate,
                endDate: queuedSelectedExperienceUnit.endDate,
                location: queuedSelectedExperienceUnit.location,
                description: queuedSelectedExperienceUnit.description
            }
        ])
    } else {
        setExperienceUnitHeaders([
            ...unselectedExperienceHeaders,
            {
              company: queuedSelectedExperienceUnit.company,
              position: queuedSelectedExperienceUnit.position,
              startDate: queuedSelectedExperienceUnit.startDate,
              endDate: queuedSelectedExperienceUnit.endDate,
              location: queuedSelectedExperienceUnit.location,
              description: queuedSelectedExperienceUnit.description
            }
        ])
    }

    handleSetIsPreexistingExperienceUnitSelectedFalse();
    toggleIsExperienceUnitSelected();
  };

const handleSelectNewExperienceUnit = (e) => {
  setSelectedExperienceUnit(experienceInfo.find(unit => {
    return unit.company === e.target.textContent;
  }));
  setQueuedSelectedExperienceUnit(experienceInfo.find(unit => {
    return unit.company === e.target.textContent;
  }));
}

  const experienceHeaders = experienceUnitHeaders.map(unit => {
    return (
        <div 
            onClick={handleSelectNewExperienceUnit} 
            key={uuidv4()}
        >
            <h3 onClick={() => {toggleIsExperienceUnitSelected(); handleSetIsPreexistingExperienceUnitSelectedTrue();}}
                className='experience-information-header-container' 
            >{unit.company}</h3>
        </div>
    );
});

  const ResumeInformationUnitsExperience = experienceInfo.map(unit => {
    return (
        <ResumeInformationUnitExperience key={uuidv4()} experienceInfo={unit} />
    );
});

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
              personalInfo={personalInfo} 
            />
            <EducationInformationForm 
              onSave={handleSaveEducation} 
              onDelete={handleDeleteEducation} 
              createEduUnit={createEduUnit}
              inputValues={queuedSelectedEducationUnit}
              onUpdateInputValues={updateInputValuesEducation}
              isEducationUnitSelected={isEducationUnitSelected}
              toggleIsEducationUnitSelected={toggleIsEducationUnitSelected}
              educationHeaders={educationHeaders}
              />
            <ExperienceInformationForm 
              onSave={handleSaveExperience} 
              onDelete={handleDeleteExperience} 
              createExperienceUnit={createExperienceUnit}
              inputValues={queuedSelectedExperienceUnit}
              onUpdateInputValues={updateInputValuesExperience}
              isExperienceUnitSelected={isExperienceUnitSelected}
              toggleIsExperienceUnitSelected={toggleIsExperienceUnitSelected}
              experienceHeaders={experienceHeaders}
            />
        </div>
      <Resume 
        personalInfo={personalInfo} 
        educationUnits={ResumeInformationUnitsEducation}
        experienceUnits={ResumeInformationUnitsExperience}
      />
    </div>
  );
};

export default SyncedFormAndResume;