import React from 'react';
import {createPortal} from "react-dom";
import {AnimatePresence, motion} from "framer-motion";
import classes from './style/Modal.module.scss';
import {modalVariants, overlayVariants} from "./constants";
import {Button} from "../Button";

type ModalProps = {
    open: boolean;
    handleClose: () => void;
    title: string;
    children: any;
}

export const Modal = ({open, handleClose, title, children}: ModalProps) => {
    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className={classes.overlay}
                        onClick={handleClose}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        variants={overlayVariants}
                        transition={{duration: 0.2}}
                    />
                    <motion.div
                        className={classes.modal}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        variants={modalVariants}
                        transition={{duration: 0.2}}
                    >
                        {title && (<header>
                            <h2>{title}</h2>
                        </header>)}
                        <div>
                            {children}
                        </div>
                        <div className={classes.modalAction}>
                            <Button onClick={handleClose}>Close</Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body,
    );
};