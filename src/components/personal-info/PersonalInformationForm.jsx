import '../../styles/Form.css';

function PersonalInformationForm({ onChange, name, email, phone, location}) {
    return (
        <div className="personal-information-form-container">
            <div className="personal-information-header-container">
                <h3>Personal Form</h3>
            </div>
            <form action="#">
                <label htmlFor="name">Full Name:</label>
                <div className='personal-information-input-container'>
                    <input value={name} onChange={onChange} id="name" name="name" type="text" placeholder='John Doe'/>
                </div>
                <label htmlFor="email">Email:</label>
                <div className='personal-information-input-container'>
                    <input value={email} onChange={onChange} id="email" name="email" type="text" placeholder='helloworld@helloworld.com'/>
                </div>
                <label htmlFor="phone">Phone Number:</label>
                <div className='personal-information-input-container'>
                    <input value={phone} onChange={onChange} id="phone" name="phone" type="text" placeholder='(555)-555-5555'/>
                </div>
                <label htmlFor="location">Location:</label>
                <div className='personal-information-input-container'>
                    <input value={location} onChange={onChange} className="bottom-of-form-input" id="location" name="location" type="text" placeholder='Münich, Germany'/>
                </div>
            </form>
        </div>
    );
}

export default PersonalInformationForm;