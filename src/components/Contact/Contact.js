import React from "react";
import "./Contact.css";
import SectionCard from "../SectionCard/SectionCard";
import ContactIcon from "../ContactIcon/ContactIcon"

function Contact() {
    return(
        <SectionCard cardHeading={"Contact."} cardClass={"section-card contact"} 
        headingClass={"text-center"} section={"contact"}>
            <div className="contact-icons">
                <ContactIcon class="fab fa-linkedin-in" href="https://www.linkedin.com/in/rademakerjohn1/" />
                <ContactIcon class="fas fa-envelope" href="mailto:rademakerjohn1@gmail.com" />
                <ContactIcon class="fab fa-github" href="https://www.github.com/rademakerjohn1" />
            </div>
        </SectionCard>
    )
}

export default Contact;