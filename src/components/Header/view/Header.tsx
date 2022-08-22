import React, {useState} from 'react';
import Logo from '../../../images/logo.svg'
import {IoMenu} from 'react-icons/io5';
import classes from '../style/Header.module.scss';
import useMatchMedia from "use-match-media-hook";
import {menuItems, queries} from "../contstants";
import useToggle from "../../../hooks/usetoogle";
import Menu from "./Menu";

const Header = () => {
    const [mobile] = useMatchMedia(queries);
    const [showMobileMenu, setShowMobileMenu] = useToggle(false);
    const [isSignupOpen, onSignUp] = useToggle(false);
    const [isLoginOpen, onLogin] = useToggle(false);

    return (
        <>
            <header className={`${classes.header} container`}>
                <img src={Logo} alt="logo app" className={classes.logo} />
                {mobile ? (
                    <IoMenu
                        className={classes.burger}
                        onClick={() => setShowMobileMenu(showMobileMenu)}
                    />
                ) : (
                    <Menu links={menuItems} handleSignup={onSignUp} handleLogin={onLogin} />
                )}
            </header>
        </>
    );
};

export {Header};