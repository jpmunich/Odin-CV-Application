import chevronDown from "../../assets/chevrons/chevron-down.svg";

function ExperienceInformationFormUnit({
  onToggleIsFormOpen,
  onSave,
  onCancel,
  onDelete,
  inputValues,
  onUpdateInputValues,
}) {
  return (
    <div className="experience-information-form-container">
      <div
        onClick={onToggleIsFormOpen}
        className="experience-information-header-container"
      >
        <h3>Experience Form</h3>
        <img src={chevronDown} alt="chevron" />
      </div>
      <form action="#">
        <label htmlFor="company">Company Name:</label>
        <div className="experience-information-input-container">
          <input
            value={inputValues.company}
            onChange={onUpdateInputValues}
            className="company"
            id="company"
            name="company"
            type="text"
            placeholder="Amazon"
          />
        </div>
        <label htmlFor="position">Position Title:</label>
        <div className="experience-information-input-container">
          <input
            value={inputValues.position}
            onChange={onUpdateInputValues}
            className="position"
            id="position"
            name="position"
            type="text"
            placeholder="Software Engineer"
          />
        </div>
        <label htmlFor="experience-start-date">Start Date:</label>
        <div className="experience-information-input-container">
          <input
            value={inputValues.startDate}
            onChange={onUpdateInputValues}
            className="startDate"
            id="experience-start-date"
            name="experience-start-date"
            type="text"
            placeholder="08/22"
          />
        </div>
        <label htmlFor="experience-end-date">End Date:</label>
        <div className="experience-information-input-container">
          <input
            value={inputValues.endDate}
            onChange={onUpdateInputValues}
            className="endDate"
            id="experience-end-date"
            name="experience-end-date"
            type="text"
            placeholder="Present"
          />
        </div>
        <label htmlFor="experience-location">Location:</label>
        <div className="experience-information-input-container">
          <input
            value={inputValues.location}
            onChange={onUpdateInputValues}
            className="location"
            id="experience-location"
            name="experience-location"
            type="text"
            placeholder="Seattle, WA"
          />
        </div>
        <label htmlFor="experience-description">Description:</label>
        <div className="experience-information-input-container bottom-of-form-input">
          <textarea
            value={inputValues.description}
            onChange={onUpdateInputValues}
            data-description="description"
            className="description"
            id="experience-description"
            name="experience-description"
            cols="10"
            rows="4"
            placeholder="Enter Description"
          ></textarea>
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

export default ExperienceInformationFormUnit;
