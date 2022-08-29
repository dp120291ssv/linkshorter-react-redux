import classes from './Shortens.module.scss';
import {Button} from "../Button";
import {useSelector} from "react-redux";
import {selectLinks} from "../../store/slice/linkSlice";
import {motion, AnimatePresence} from "framer-motion";
import {SetStateAction, useState} from "react";

type LinkProps = {
    code: string
    original_link: string
    full_short_link2: string
}

const Shortens = () => {
    const links = useSelector(selectLinks);
    const [copiedLinks, setCopiedLinks] = useState(undefined);
    const copyToClipboard = (link: any) => {
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLinks(link);
        })
    };

    if (!links?.length) return null;

    return (
        <section className={classes.Shortens}>
            <div className='container'>
                {links.map((item: LinkProps) => (
                    <AnimatePresence key={item.code}>
                        <motion.div
                            className={classes.item}
                            data-active={copiedLinks === item.full_short_link2}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: '50px'}}
                        >
                            <span>{item.original_link}</span>
                            <span>{item.full_short_link2}</span>
                            <Button
                                variant="square"
                                onClick={() => copyToClipboard(item.full_short_link2)}
                            >
                                {copiedLinks === item.full_short_link2 ? 'Copied!' : 'Copy'}
                            </Button>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </section>
    );
};

export {Shortens};
