import { useState } from 'react';
import chevronDown from '../../assets/chevrons/chevron-down.svg';
import chevronUp from '../../assets/chevrons/chevron-up.svg';
    
function EducationInformationForm() {
    const [isActive, setIsActive] = useState(true);
    const handleClick = () => {
        setIsActive(!isActive);
    }

    if (isActive) {
        return (
            <div className="education-information-form-container">
                <div onClick={handleClick} className="education-information-header-container">
                    <h3>Education Form</h3>
                    <img src={chevronDown} alt="chevron" />
                </div>
                <form action="#">
                    <label htmlFor="school">School:</label>
                    <div className='education-information-input-container'>
                        <input id="school" name="school" type="text" placeholder='Carnegie Mellon University'/>
                    </div>
                    <label htmlFor="degree">Degree:</label>
                    <div className='education-information-input-container'>
                        <input id="degree" name="degree" type="text" placeholder='Bachelor of the Arts'/>
                    </div>
                    <label htmlFor="start-date">Start Date:</label>
                    <div className='education-information-input-container'>
                        <input id="start-date" name="start-date" type="text" placeholder='05/22'/>
                    </div>
                    <label htmlFor="end-date">End Date:</label>
                    <div className='education-information-input-container'>
                        <input id="end-date" name="end-date" type="text" placeholder='present'/>
                    </div>
                    <label htmlFor="location">Location:</label>
                    <div className='education-information-input-container'>
                        <input className="bottom-of-form-input" id="location" name="location" type="text" placeholder='present'/>
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
            <div className='education-information-form-container'>
                <div onClick={handleClick} className="education-information-header-container">
                    <h3>Education Form</h3>
                    <img src={chevronUp} alt="chevron" />
                </div>
            </div>
        );
    }
}

export default EducationInformationForm;