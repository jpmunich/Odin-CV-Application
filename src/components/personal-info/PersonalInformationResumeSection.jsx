function PersonalInformationResumeSection({ name, email, phone, location }) {
    return (
        <div id="header-container">
        <header id="name-container">
            <h1>{name}</h1>
        </header>
        <section id="header-info-container">
            <div id="header-info-top-column">
                <p>22008 43rd Dr. SE  |</p>
                <p>{location}  |</p>
                <p>{phone}</p>
            </div>
            <div id="header-info-bottom-column">
                <p>{email}</p>
            </div>
        </section>
    </div>
    );
}

export default PersonalInformationResumeSection;