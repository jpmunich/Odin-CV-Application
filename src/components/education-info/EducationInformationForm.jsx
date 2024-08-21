import { useState } from "react";
import EducationInformationFormUnit from "./EducationInformationFormUnit";
import chevronUp from "../../assets/chevrons/chevron-up.svg";
import chevronDown from "../../assets/chevrons/chevron-down.svg";

function EducationInformationForm({
  onSave,
  onDelete,
  createEduUnit,
  inputValues,
  onUpdateInputValues,
  isEducationUnitSelected,
  toggleIsEducationUnitSelected,
  educationHeaders,
}) {
  const [isFormOpen, setisFormOpen] = useState(true);

  const toggleIsFormOpen = () => setisFormOpen(!isFormOpen);

  if (isFormOpen && isEducationUnitSelected) {
    return (
      <EducationInformationFormUnit
        onSave={onSave}
        onDelete={onDelete}
        onCancel={toggleIsEducationUnitSelected}
        onToggleIsFormOpen={toggleIsFormOpen}
        inputValues={inputValues}
        onUpdateInputValues={onUpdateInputValues}
      />
    );
  } else if (isFormOpen && !isEducationUnitSelected) {
    return (
      <div className="education-information-form-container">
        <div
          onClick={toggleIsFormOpen}
          className="education-information-header-container"
        >
          <h3>Education Form</h3>
          <img src={chevronDown} alt="chevron" />
        </div>
        <div>{educationHeaders}</div>
        <div className="add-education-section-button-container">
          <button
            onClick={() => {
              toggleIsEducationUnitSelected(), createEduUnit();
            }}
            className="add-education-section-button"
          >
            Add +
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="education-information-form-container">
        <div
          onClick={toggleIsFormOpen}
          className="education-information-header-container"
        >
          <h3>Education Form</h3>
          <img src={chevronUp} alt="chevron" />
        </div>
      </div>
    );
  }
}

export default EducationInformationForm;
