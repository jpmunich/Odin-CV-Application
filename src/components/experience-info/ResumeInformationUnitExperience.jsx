function ResumeInformationUnitExperience({ company, startDate, endDate, location, description, position }) {
    return (
        <div className='resume-info-container'>
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <h4>{company}</h4>
                <p>{position}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ResumeInformationUnitExperience;