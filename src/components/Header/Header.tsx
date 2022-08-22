import React from 'react';
import Logo from '../../images/logo.svg'
import {IoMenu} from 'react-icons/io5';
import classes from './style/Header.module.scss';
import useMatchMedia from "use-match-media-hook";
import {menuItems, queries} from "./contstants";
import useToggle from "../../hooks/usetoogle";
import Menu from "./Menu";
import {AnimatePresence, motion} from "framer-motion";
import {Modal} from "../Modal";

const Header = () => {
    const [mobile] = useMatchMedia(queries);
    const [showMobileMenu, setShowMobileMenu] = useToggle(false);
    const [isSignupOpen, onSignUp] = useToggle(false);
    const [isLoginOpen, onLogin] = useToggle(false);

    return (
        <>
            <header className={`${classes.header} container`}>
                <img src={Logo} alt="logo app" className={classes.logo}/>
                {mobile ? (
                    <IoMenu
                        className={classes.burger}
                        onClick={() => setShowMobileMenu(showMobileMenu)}
                    />
                ) : (
                    <Menu links={menuItems} handleSignup={onSignUp} handleLogin={onLogin}/>
                )}
                <AnimatePresence>
                    {
                        showMobileMenu && mobile && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: '280px' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={classes.mobileMenu}
                            >
                                <Menu links={menuItems} handleSignup={onSignUp} handleLogin={onLogin} />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </header>

            <Modal open={isSignupOpen} handleClose={onSignUp} title="Sign Up">
                <>Sign Up</>
            </Modal>

            <Modal open={isLoginOpen} handleClose={onLogin} title="Sign In">
                <>Login</>
            </Modal>
        </>
    );
};

export {Header};