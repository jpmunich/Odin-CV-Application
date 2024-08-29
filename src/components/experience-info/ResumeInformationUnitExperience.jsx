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
        <p>{experienceInfo.position}</p>
        <p>{experienceInfo.description}</p>
      </div>
    </div>
  );
}

export default ResumeInformationUnitExperience;
