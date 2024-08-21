import ResumeInformationUnitExperience from "./ResumeInformationUnitExperience";

function ExperienceInformationResumeSection({ experienceUnits }) {
  return (
    <section id="experience-container">
      <h3>Experience</h3>
      <div>{experienceUnits}</div>
    </section>
  );
}

export default ExperienceInformationResumeSection;
