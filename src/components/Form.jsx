import '../styles/Form.css';

function Form() {
    return (
        <div className="form-container">
            <PersonalInformationForm />
            <EducationInformationForm />
            <ExperienceInformationForm />
        </div>
    );
}

function PersonalInformationForm() {
    return (
        <div className="personal-information-form-container">
            <h3>Personal Form</h3>
            <form action="#">
                <label htmlFor="full-name">Full Name:</label>
                <div className='personal-information-input-container'>
                    <input id="full-name" name="full-name" type="text" placeholder='John Doe'/>
                </div>
                <label htmlFor="email">Email:</label>
                <div className='personal-information-input-container'>
                    <input id="email" name="email" type="text" placeholder='helloworld@helloworld.com'/>
                </div>
                <label htmlFor="phone-number">Phone Number:</label>
                <div className='personal-information-input-container'>
                    <input id="phone-number" name="phone-number" type="text" placeholder='(555)-555-5555'/>
                </div>
                <label htmlFor="location">Location:</label>
                <div className='personal-information-input-container'>
                    <input className="bottom-of-form-input" id="location" name="location" type="text" placeholder='Münich, Germany'/>
                </div>
            </form>
        </div>
    );
}

function EducationInformationForm() {
    return (
        <div className="education-information-form-container">
            <h3>Education Form</h3>
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
            </form>
        </div>
    );
}

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

export default Form;