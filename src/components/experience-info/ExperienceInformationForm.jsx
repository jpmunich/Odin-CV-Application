import { useState } from "react";
import chevronDown from "../../assets/chevrons/chevron-down.svg";
import chevronUp from "../../assets/chevrons/chevron-up.svg";
import ExperienceInformationFormUnit from "./ExperienceInformationFormUnit";

function ExperienceInformationForm({
  onSave,
  onDelete,
  isExperienceUnitSelected,
  toggleIsExperienceUnitSelected,
  createExperienceUnit,
  onUpdateInputValues,
  inputValues,
  experienceHeaders,
}) {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  if (isFormOpen && isExperienceUnitSelected) {
    return (
      <ExperienceInformationFormUnit
        onToggleIsFormOpen={toggleIsFormOpen}
        onSave={onSave}
        onDelete={onDelete}
        onCancel={toggleIsExperienceUnitSelected}
        onDelete={onDelete}
        inputValues={inputValues}
        onUpdateInputValues={onUpdateInputValues}
        experienceHeaders={experienceHeaders}
      />
    );
  } else if (isFormOpen && !isExperienceUnitSelected) {
    return (
      <div className="experience-information-form-container">
        <div
          onClick={toggleIsFormOpen}
          className="experience-information-header-container"
        >
          <h3>Experience Form</h3>
          <img src={chevronDown} alt="chevron" />
        </div>
        <div>{experienceHeaders}</div>
        <div className="add-experience-section-button-container">
          <button
            onClick={() => {
              toggleIsExperienceUnitSelected();
              createExperienceUnit();
            }}
            className="add-experience-section-button"
          >
            Add +
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={toggleIsFormOpen}
        className="experience-information-form-container"
      >
        <div className="experience-information-header-container">
          <h3>Experience Form</h3>
          <img src={chevronUp} alt="chevron" />
        </div>
      </div>
    );
  }
}

export default ExperienceInformationForm;
