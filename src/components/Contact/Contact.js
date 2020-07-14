import React from "react";
import "./Contact.css";
import SectionCard from "../SectionCard/SectionCard";
import ContactIcon from "../ContactIcon/ContactIcon"

function Contact() {
    return(
        <SectionCard cardHeading={"Contact."} cardClass={"section-card contact"} 
        headingClass={"text-center"} section={"contact"} containerClass="d-flex justify-content-center">
                <ContactIcon class="fab fa-linkedin-in" href="https://www.linkedin.com/in/rademakerjohn1/" />
                <ContactIcon class="fas fa-envelope" href="mailto:rademakerjohn1@gmail.com" />
                <ContactIcon class="fab fa-github" href="https://www.github.com/rademakerjohn1" />
        </SectionCard>
    )
}

export default Contact;