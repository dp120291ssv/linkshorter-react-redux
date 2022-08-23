import React from 'react';
import img from '../../images/illustration-working.svg'
import classes from './style/Hero.module.scss';
import {Button} from "../Button";

const Hero = () => {
    return (
        <section className={`${classes.hero} container`}>
            <div>
                <img src={img} alt="hero" className={classes.img} />
            </div>
            <article className={classes.text}>
                <h1 className={classes.title}>More than just shorter links</h1>
                <p className={classes.description}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button size="large">Get Started</Button>
            </article>
        </section>
    );
};

export {Hero};