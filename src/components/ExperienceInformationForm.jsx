import { useState } from 'react';

function ExperienceInformationForm() {
    return (
        <div className="experience-information-form-container">
            <h3>Experience Form</h3>
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
                
            </form>
        </div>
    );
}

export default ExperienceInformationForm;