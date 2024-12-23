import React from "react";

import { contactText } from "../constants";

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="tit">CONTACT</h2>
            <div className="contact__inner">
                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact, key) => (
                            <div key={key}>
                                <a
                                    href={contact.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {contact.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;