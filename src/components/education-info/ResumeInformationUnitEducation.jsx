function ResumeInformationUnitEducation({ educationInfo }) {
  return (
    <div className="resume-info-container">
      <div className="resume-info-left">
        <p>
          {educationInfo.startDate} - {educationInfo.endDate}
        </p>
        <p>{educationInfo.location}</p>
      </div>
      <div className="resume-info-right">
        <h4>{educationInfo.school}</h4>
        <p>{educationInfo.degree}</p>
      </div>
    </div>
  );
}

export default ResumeInformationUnitEducation;
