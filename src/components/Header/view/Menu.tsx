import React from 'react';
import classes from '../style/Menu.module.scss';
import {Button} from "../../Button";

type Link = {
    url: string
    text: string
}

type MenuProps = {
    links: Array<Link>
    handleSignup: () => void
    handleLogin: () => void
}

const Menu = ({links = [], handleSignup, handleLogin}: MenuProps) => {
    const token = null;

    return (
        <div className={classes.menu}>
            <div className={classes.pages}>
                {links.map(link => (
                    <a href={link.url} className={classes.link}>{link.text}</a>
                ))}
            </div>
            <div>
                {token ? (
                    <Button>Sign Out</Button>
                ) : (
                    <>
                        <Button variant="link" onClick={handleLogin}>Login</Button>
                        <Button onClick={handleSignup}>Sign Up</Button>
                    </>
                )}

            </div>
        </div>
    );
};

export default Menu;