import React from 'react';
import {features} from './data';
import classes from './style/Features.module.scss';


type FeatureItemProps = {
    title: string
    body: string
    icon: string
}

const Features = () => {
    return (
        <section className={classes.features}>
            <div className="container">
                <h2 className={classes.title}>{features.title}</h2>
                <p className={classes.description}>{features.description}</p>
                <div className={classes.items}>
                    {features.items.map(item => (
                        <FeatureItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({title, body, icon}: FeatureItemProps) => {
    return (
        <article className={classes.item}>
            <figure>
                <img alt={title} src={icon}/>
            </figure>
            <h3>{title}</h3>
            <p>{body}</p>
        </article>
    )
}

export {Features};