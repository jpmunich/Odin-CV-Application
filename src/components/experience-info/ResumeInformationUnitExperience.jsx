function ResumeInformationUnitExperience({ experienceInfo }) {
  return (
    <div className="resume-info-container">
      <div className="resume-info-left">
        <p>
          {experienceInfo.startDate} - {experienceInfo.endDate}
        </p>
        <p>{experienceInfo.location}</p>
      </div>
      <div className="resume-info-right">
        <h4>{experienceInfo.company}</h4>
        <h6>{experienceInfo.position}</h6>
        <p>{experienceInfo.description}</p>
      </div>
    </div>
  );
}

export default ResumeInformationUnitExperience;
