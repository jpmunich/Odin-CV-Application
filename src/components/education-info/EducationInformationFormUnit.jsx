import chevronDown from "../../assets/chevrons/chevron-down.svg";

function EducationInformationFormUnit({
  onSave,
  onCancel,
  onDelete,
  onToggleIsFormOpen,
  inputValues,
  onUpdateInputValues,
}) {
  return (
    <div className="education-information-form-container">
      <div
        onClick={onToggleIsFormOpen}
        className="education-information-header-container"
      >
        <h3>Education Form</h3>
        <img src={chevronDown} alt="chevron" />
      </div>
      <form action="#">
        <label htmlFor="school">School:</label>
        <div className="education-information-input-container">
          <input
            onChange={onUpdateInputValues}
            value={inputValues.school}
            className="school"
            id="school"
            name="school"
            type="text"
            placeholder="Carnegie Mellon University"
          />
        </div>
        <label htmlFor="degree">Degree:</label>
        <div className="education-information-input-container">
          <input
            onChange={onUpdateInputValues}
            value={inputValues.degree}
            className="degree"
            id="degree"
            name="degree"
            type="text"
            placeholder="Bachelor of the Arts"
          />
        </div>
        <label htmlFor="education-start-date">Start Date:</label>
        <div className="education-information-input-container">
          <input
            onChange={onUpdateInputValues}
            value={inputValues.startDate}
            className="startDate"
            id="education-start-date"
            name="education-start-date"
            type="text"
            placeholder="05/22"
          />
        </div>
        <label htmlFor="education-end-date">End Date:</label>
        <div className="education-information-input-container">
          <input
            onChange={onUpdateInputValues}
            value={inputValues.endDate}
            className="endDate"
            id="education-end-date"
            name="education-end-date"
            type="text"
            placeholder="present"
          />
        </div>
        <label htmlFor="education-location">Location:</label>
        <div className="education-information-input-container bottom-of-form-input">
          <input
            onChange={onUpdateInputValues}
            value={inputValues.location}
            className="location"
            id="education-location"
            name="location"
            type="text"
            placeholder="present"
          />
        </div>
        <div className="button-container">
          <button onClick={onDelete} className="delete-button" type="button">
            Delete
          </button>
          <button onClick={onCancel} className="cancel-button" type="button">
            Cancel
          </button>
          <button onClick={onSave} className="save-button" type="button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationInformationFormUnit;
