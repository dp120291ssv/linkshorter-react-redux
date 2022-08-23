import React from 'react';
import {Button} from "../Button";
import classes from './style/Form.module.scss';


const Form = () => {
    return (
        <section className={classes.section}>
            <div className="container">
                <form autoComplete='off' className={classes.form}>
                    <input type="url" placeholder="Shorten a link here..." className={classes.input}/>
                    <Button variant="square" type="submit" size="medium">
                        Shorten it!
                    </Button>
                </form>
            </div>
        </section>
    );
};

export {Form};