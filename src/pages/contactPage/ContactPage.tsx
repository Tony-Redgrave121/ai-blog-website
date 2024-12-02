import React from 'react'
import ContactHeaderSection from "../../components/main/contactHeaderSection/ContactHeaderSection";
import ContactForm from "../../components/main/contactForm/ContactForm";
import FAQ from "../../components/main/faq/FAQ";

const ContactPage = () => {
    return (
        <main>
            <ContactHeaderSection />
            <ContactForm />
            <FAQ />
        </main>
    )
}

export default ContactPage;