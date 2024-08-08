import chevronDown from '../../assets/chevrons/chevron-down.svg';

function ExperienceInformationFormUnit({ onToggleIsFormOpen, onSave, onCancel, inputValues, onUpdateInputValues, experienceSave }) {
    return (
        <div className="experience-information-form-container">
            <div onClick={onToggleIsFormOpen} className="experience-information-header-container">
                <h3>Experience Form</h3>
                <img src={chevronDown} alt="chevron" />
            </div>
            <form action="#">
                <label htmlFor="company">Company Name:</label>
                <div className='experience-information-input-container'>
                    <input value={inputValues.company} onChange={onUpdateInputValues} id="company" name="company" type="text" placeholder='Amazon' />
                </div>
                <label htmlFor="position">Position Title:</label>
                <div className='experience-information-input-container'>
                    <input value={inputValues.position} onChange={onUpdateInputValues} id="position" name="position" type="text" placeholder='Software Engineer' />
                </div>
                <label htmlFor="experience-start-date">Start Date:</label>
                <div className='experience-information-input-container'>
                    <input value={inputValues.startDate} onChange={onUpdateInputValues} id="experience-start-date" name="experience-start-date" type="text" placeholder='08/22' />
                </div>
                <label htmlFor="experience-end-date">End Date:</label>
                <div className='experience-information-input-container'>
                    <input value={inputValues.endDate} onChange={onUpdateInputValues} id="experience-end-date" name="experience-end-date" type="text" placeholder='Present' />
                </div>
                <label htmlFor="experience-location">Location:</label>
                <div className='experience-information-input-container'>
                    <input value={inputValues.location} onChange={onUpdateInputValues} id="experience-location" name="experience-location" type="text" placeholder='Seattle, WA' />
                </div>
                <label htmlFor="experience-description">Description:</label>
                <div className='experience-information-input-container'>
                    <textarea value={inputValues.description} onChange={onUpdateInputValues} className="bottom-of-form-input" name="experience-description" id="experience-description" cols="10" rows="4" placeholder='Enter Description'></textarea>
                </div>
                <div className="button-container">
                    <button className='delete-button' type="button">Delete</button>
                    <button onClick={onCancel} className='cancel-button' type="button">Cancel</button>
                    <button onClick={() => {
                        onSave(); 
                        experienceSave();
                        }} 
                    className='save-button' type="button">Save</button>
                </div>
            </form>
        </div>
    );
}

export default ExperienceInformationFormUnit;