import { useState } from 'react';
import chevronDown from '../../assets/chevrons/chevron-down.svg';
import chevronUp from '../../assets/chevrons/chevron-up.svg';

function ExperienceInformationForm({ onSave, onCancel }) {
    const [isActive, setIsActive] = useState(true);
    const handleClick = () => {
        setIsActive(!isActive);
    }

    if (isActive) {
        return (
            <div className="experience-information-form-container">
                <div onClick={handleClick} className="experience-information-header-container">
                    <h3>Experience Form</h3>
                    <img src={chevronDown} alt="chevron" />
                </div>
                <form action="#">
                    <label htmlFor="company">Company Name:</label>
                    <div className='experience-information-input-container'>
                        <input id="company" name="company" type="text" placeholder='Amazon' />
                    </div>
                    <label htmlFor="position">Position Title:</label>
                    <div className='experience-information-input-container'>
                        <input id="position" name="position" type="text" placeholder='Software Engineer' />
                    </div>
                    <label htmlFor="experience-start-date">Start Date:</label>
                    <div className='experience-information-input-container'>
                        <input id="experience-start-date" name="experience-start-date" type="text" placeholder='08/22' />
                    </div>
                    <label htmlFor="experience-end-date">End Date:</label>
                    <div className='experience-information-input-container'>
                        <input id="experience-end-date" name="experience-end-date" type="text" placeholder='Present' />
                    </div>
                    <label htmlFor="experience-location">Location:</label>
                    <div className='experience-information-input-container'>
                        <input id="experience-location" name="experience-location" type="text" placeholder='Seattle, WA' />
                    </div>
                    <label htmlFor="experience-description">Description:</label>
                    <div className='experience-information-input-container'>
                        <textarea className="bottom-of-form-input" name="experience-description" id="experience-description" cols="10" rows="4" placeholder='Enter Description'></textarea>
                    </div>
                    <div className="button-container">
                        <button className='delete-button' type="button">Delete</button>
                        <button onClick={onCancel} className='cancel-button' type="button">Cancel</button>
                        <button onClick={onSave} className='save-button' type="button">Save</button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div onClick={handleClick} className="experience-information-form-container">
                <div className="experience-information-header-container">
                    <h3>Experience Form</h3>
                    <img src={chevronUp} alt="chevron" />
                </div>
            </div>
        );
    }
}

export default ExperienceInformationForm;