import React from "react";
import {MailToButtonWrapper} from './ContactsElements'

const MailToButton = ({ mailto, label }) => {
    return (
        <MailToButtonWrapper
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </MailToButtonWrapper>
    );
};

export default MailToButton;