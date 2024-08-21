function PersonalInformationResumeSection({ personalInfo }) {
  return (
    <div id="header-container">
      <header id="name-container">
        <h1>{personalInfo.name}</h1>
      </header>
      <section id="header-info-container">
        <div id="header-info-top-column">
          <p>{personalInfo.address} |</p>
          <p>{personalInfo.location} |</p>
          <p>{personalInfo.phone}</p>
        </div>
        <div id="header-info-bottom-column">
          <p>{personalInfo.email}</p>
        </div>
      </section>
    </div>
  );
}

export default PersonalInformationResumeSection;
