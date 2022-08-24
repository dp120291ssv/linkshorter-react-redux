import React from 'react';
import {Form} from "./Form";

type SignInProps = {
    closeModal: () => void;
}

export const SignIn = ({closeModal}: SignInProps) => {

    const handleLogin = (email: string, pass: string) => {
        closeModal();
    }

    return (
        <Form handleClick={handleLogin} title="Login"/>
    );
};