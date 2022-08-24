import React, {useState} from 'react';
import {Button} from "../Button";
import classes from './style/Form.module.scss';

type FormProps = {
    handleClick: (email: string, pass: string) => void;
    title: string;
}

const Form = ({handleClick, title}: FormProps) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={classes.form}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <Button onClick={() => handleClick(email, pass)}>{title}</Button>
        </div>
    );
};

export {Form};