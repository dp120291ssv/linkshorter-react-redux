import classes from './Shortens.module.scss';
import {Button} from "../Button";
import {useSelector} from "react-redux";
import {selectLinks} from "../../store/slice/linkSlice";

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
                    <div
                        key={item.code}
                        className={classes.item}
                    >
                        <span>{item.original_link}</span>
                        <span>{item.full_short_link2}</span>
                        <Button
                            variant="square"
                        >
                            Copy
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export {Shortens};
