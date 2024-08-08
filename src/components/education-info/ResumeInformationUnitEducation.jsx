function ResumeInformationUnitEducation({ educationInfo }) {
    return (
        <div className="resume-info-container">
            <div>
                <p>{educationInfo.startDate} - {educationInfo.endDate}</p>
                <p>{educationInfo.location}</p>
            </div>
            <div>
                <h4>{educationInfo.school}</h4>
                <p>{educationInfo.degree}</p>
            </div>
        </div>
    );
}

export default ResumeInformationUnitEducation;