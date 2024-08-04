function ResumeInformationUnitEducation({ school, degree, location, startDate, endDate }) {
    return (
        <div className="resume-info-container">
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <h4>{school}</h4>
                <p>{degree}</p>
            </div>
        </div>
    );
}

export default ResumeInformationUnitEducation;