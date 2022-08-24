import React from 'react';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {footer} from './data';
import classes from './style/Footer.module.scss';

type LinkProps = {
    url: string
    text: string
}

type MenuGroupProps = {
    groupTitle: string;
    links: Array<LinkProps>;
}

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={`${classes.content} container`}>
                <Logo className={classes.logo}/>
                <div className={classes.menu}>
                    {footer.menu.map(menuItem => (
                        <MenuGroup key={menuItem.id} {...menuItem} />
                    ))}
                </div>
                <div className={classes.socials}>
                    {footer.socials.map(({id, url, image: Svg}) => (
                        <a key={id} href={url}>
                            <Svg/>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

const MenuGroup = ({groupTitle, links}: MenuGroupProps) => {
    return (
        <div className={classes.menuGroup}>
            <h4>{groupTitle}</h4>
            {links.map(link => (
                <a href={link.url} key={link.text}>{link.text}</a>
            ))}
        </div>
    )
}

export {Footer};