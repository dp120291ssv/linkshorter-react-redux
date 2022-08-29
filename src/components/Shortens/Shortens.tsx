import classes from './Shortens.module.scss';
import {Button} from "../Button";
import {useSelector} from "react-redux";
import {selectLinks} from "../../store/slice/linkSlice";
import {motion, AnimatePresence} from "framer-motion";

type LinkProps = {
    code: string
    original_link: string
    full_short_link2: string
}

const Shortens = () => {
    const links = useSelector(selectLinks);

    if (!links?.length) return null;

    return (
        <section className={classes.Shortens}>
            <div className='container'>
                {links.map((item: LinkProps) => (
                    <AnimatePresence key={item.code}>
                        <motion.div
                            className={classes.item}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: '50px'}}
                        >
                            <span>{item.original_link}</span>
                            <span>{item.full_short_link2}</span>
                            <Button variant="square">Copy</Button>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </section>
    );
};

export {Shortens};
