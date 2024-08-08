function ResumeInformationUnitExperience({ experienceInfo }) {
    return (
        <div className='resume-info-container'>
            <div>
                <p>{experienceInfo.startDate} - {experienceInfo.endDate}</p>
                <p>{experienceInfo.location}</p>
            </div>
            <div>
                <h4>{experienceInfo.company}</h4>
                <p>{experienceInfo.position}</p>
                <p>{experienceInfo.description}</p>
            </div>
        </div>
    );
}

export default ResumeInformationUnitExperience;