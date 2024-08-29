import { useState } from "react";
import { Resume } from "./Resume";
import { v4 as uuidv4 } from "uuid"; // package that generates unique keys
import PersonalInformationForm from "./personal-info/PersonalInformationForm";
import EducationInformationForm from "./education-info/EducationInformationForm";
import ExperienceInformationForm from "./experience-info/ExperienceInformationForm";
import ResumeInformationUnitEducation from "./education-info/ResumeInformationUnitEducation";
import ResumeInformationUnitExperience from "./experience-info/ResumeInformationUnitExperience";
import {
  personalInfoDefault,
  educationInfoDefault,
  experienceInfoDefault,
} from "./Data";
import LoadData from "./ManipulateData";

function SyncedFormAndResume() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    address: "",
    location: "",
    address: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState([]);
  const [selectedEducationUnit, setSelectedEducationUnit] = useState({});
  const [queuedSelectedEducationUnit, setQueuedSelectedEducationUnit] =
    useState({});
  const [isEducationUnitSelected, setIsEducationUnitSelected] = useState(false);
  const [educationUnitHeaders, setEducationUnitHeaders] = useState([]);

  const [experienceInfo, setExperienceInfo] = useState([]);
  const [selectedExperienceUnit, setSelectedExperienceUnit] = useState({});
  const [queuedSelectedExperienceUnit, setQueuedSelectedExperienceUnit] =
    useState({});
  const [isExperienceUnitSelected, setIsExperienceUnitSelected] =
    useState(false);
  const [experienceUnitHeaders, setExperienceUnitHeaders] = useState([]);

  const handlePersonalInfoChange = (e) => {
    const property = e.target.id;
    setPersonalInfo({
      ...personalInfo,
      [property]: e.target.value,
    });
  };

  const toggleIsEducationUnitSelected = () =>
    setIsEducationUnitSelected(!isEducationUnitSelected);
  const matchUnselectedEducationValues = () => {
    // Line below checks if each educationInfo unit's values are equal to the selected unit's values
    return educationInfo.filter(
      (unit) =>
        unit.school !== selectedEducationUnit.school ||
        unit.degree !== selectedEducationUnit.degree ||
        unit.startDate !== selectedEducationUnit.startDate ||
        unit.endDate !== selectedEducationUnit.endDate ||
        unit.location !== selectedEducationUnit.location
    );
  };

  const handleSaveEducation = () => {
    const schoolValue = document.getElementById("school").value;

    if (schoolValue !== "") {
      const unselectedEduUnits = matchUnselectedEducationValues();

      setEducationInfo([...unselectedEduUnits, queuedSelectedEducationUnit]);
      setEducationUnitHeaders([
        ...unselectedEduUnits,
        queuedSelectedEducationUnit,
      ]);
      toggleIsEducationUnitSelected();
    }
  };

  const handleSelectNewEducationUnit = (e) => {
    setSelectedEducationUnit(
      educationInfo.find((unit) => unit.school === e.target.textContent)
    );
    setQueuedSelectedEducationUnit(
      educationInfo.find((unit) => unit.school === e.target.textContent)
    );
  };

  const educationHeaders = educationUnitHeaders.map((unit) => {
    return (
      <div onClick={handleSelectNewEducationUnit} key={uuidv4()}>
        <h3
          onClick={toggleIsEducationUnitSelected}
          className="education-information-header-container"
        >
          {unit.school}
        </h3>
      </div>
    );
  });

  const updateInputValuesEducation = (e) => {
    const property = e.target.className;
    setQueuedSelectedEducationUnit({
      ...queuedSelectedEducationUnit,
      [property]: e.target.value,
    });
  };

  const createEducationUnit = () => {
    setSelectedEducationUnit({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setQueuedSelectedEducationUnit({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const ResumeInformationUnitsEducation = educationInfo.map((unit) => {
    return (
      <ResumeInformationUnitEducation key={uuidv4()} educationInfo={unit} />
    );
  });

  const handleDeleteEducation = () => {
    setEducationInfo(matchUnselectedEducationValues());
    setEducationUnitHeaders(matchUnselectedEducationValues());
    toggleIsEducationUnitSelected();
  };

  /* 
      Experience 
      Section 
      Begins 
      Here
  */

  const toggleIsExperienceUnitSelected = () =>
    setIsExperienceUnitSelected(!isExperienceUnitSelected);
  const matchUnselectedExperienceValues = () => {
    // Line below checks if each experienceInfo unit's values are equal to the selected unit's values
    return experienceInfo.filter(
      (unit) =>
        unit.company !== selectedExperienceUnit.company ||
        unit.position !== selectedExperienceUnit.position ||
        unit.startDate !== selectedExperienceUnit.startDate ||
        unit.endDate !== selectedExperienceUnit.endDate ||
        unit.location !== selectedExperienceUnit.location ||
        unit.description !== selectedExperienceUnit.description
    );
  };

  const createExperienceUnit = () => {
    setSelectedExperienceUnit({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setQueuedSelectedExperienceUnit({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const updateInputValuesExperience = (e) => {
    const property = e.target.className;
    setQueuedSelectedExperienceUnit({
      ...queuedSelectedExperienceUnit,
      [property]: e.target.value,
    });
  };

  const handleSaveExperience = () => {
    const companyValue = document.getElementById("company").value;

    if (companyValue !== "") {
      const unselectedExperienceUnits = matchUnselectedExperienceValues();

      setExperienceInfo([
        ...unselectedExperienceUnits,
        queuedSelectedExperienceUnit,
      ]);

      setExperienceUnitHeaders([
        ...unselectedExperienceUnits,
        queuedSelectedExperienceUnit,
      ]);

      toggleIsExperienceUnitSelected();
    }
  };

  const handleSelectNewExperienceUnit = (e) => {
    setSelectedExperienceUnit(
      experienceInfo.find((unit) => unit.company === e.target.textContent)
    );
    setQueuedSelectedExperienceUnit(
      experienceInfo.find((unit) => unit.company === e.target.textContent)
    );
  };

  const experienceHeaders = experienceUnitHeaders.map((unit) => {
    return (
      <div onClick={handleSelectNewExperienceUnit} key={uuidv4()}>
        <h3
          onClick={toggleIsExperienceUnitSelected}
          className="experience-information-header-container"
        >
          {unit.company}
        </h3>
      </div>
    );
  });

  const ResumeInformationUnitsExperience = experienceInfo.map((unit) => (
    <ResumeInformationUnitExperience key={uuidv4()} experienceInfo={unit} />
  ));

  const handleDeleteExperience = () => {
    setExperienceInfo(matchUnselectedExperienceValues());
    setExperienceUnitHeaders(matchUnselectedExperienceValues());
    toggleIsExperienceUnitSelected();
  };

  const handleLoadData = () => {
    setPersonalInfo(personalInfoDefault);

    setEducationInfo([...educationInfoDefault]);
    setEducationUnitHeaders([...educationInfoDefault]);

    setExperienceInfo([...experienceInfoDefault]);
    setExperienceUnitHeaders([...experienceInfoDefault]);
  };

  const handleClearData = () => {
    setPersonalInfo({
      name: "",
      address: "",
      location: "",
      email: "",
      phone: "",
    });

    setEducationInfo([]);
    setEducationUnitHeaders([]);

    setExperienceInfo([]);
    setExperienceUnitHeaders([]);
  };

  return (
    <div className="ui-container">
      <div className="form-container">
        <LoadData onLoad={handleLoadData} onClear={handleClearData} />
        <PersonalInformationForm
          onChange={handlePersonalInfoChange}
          personalInfo={personalInfo}
        />
        <EducationInformationForm
          onSave={handleSaveEducation}
          onDelete={handleDeleteEducation}
          createEduUnit={createEducationUnit}
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
}

export default SyncedFormAndResume;
