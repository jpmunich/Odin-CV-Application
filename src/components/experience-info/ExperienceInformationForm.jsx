import { useState } from 'react';
import chevronDown from '../../assets/chevrons/chevron-down.svg';
import chevronUp from '../../assets/chevrons/chevron-up.svg';

function ExperienceInformationForm() {
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
                    <label htmlFor="company-name">Company Name:</label>
                    <div className='experience-information-input-container'>
                        <input id="company-name" name="company-name" type="text" placeholder='Amazon' />
                    </div>
                    <label htmlFor="position-title">Position Title:</label>
                    <div className='experience-information-input-container'>
                        <input id="position-title" name="position-title" type="text" placeholder='Software Engineer' />
                    </div>
                    <label htmlFor="start-date">Start Date:</label>
                    <div className='experience-information-input-container'>
                        <input id="start-date" name="start-date" type="text" placeholder='08/22' />
                    </div>
                    <label htmlFor="end-date">End Date:</label>
                    <div className='experience-information-input-container'>
                        <input id="end-date" name="end-date" type="text" placeholder='Present' />
                    </div>
                    <label htmlFor="location">Location:</label>
                    <div className='experience-information-input-container'>
                        <input id="location" name="location" type="text" placeholder='Seattle, WA' />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <div className='experience-information-input-container'>
                        <textarea className="bottom-of-form-input" name="description" id="description" cols="10" rows="4" placeholder='Enter Description'></textarea>
                    </div>
                    <div className="button-container">
                        <button className='delete-button' type="button">Delete</button>
                        <button className='cancel-button' type="button">Cancel</button>
                        <button className='save-button' type="button">Save</button>
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