import React from 'react';
import {Form} from "./Form";

type SignUpProps = {
    closeModal: () => void;
}

export const SignUp = ({closeModal}: SignUpProps) => {

    const handleRegister = (email: string, pass: string) => {
        closeModal();
    }

    return (
        <Form handleClick={handleRegister} title="Register"/>
    );
};