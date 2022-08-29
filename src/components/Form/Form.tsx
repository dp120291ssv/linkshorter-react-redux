import React from 'react';
import {Button} from "../Button";
import classes from './style/Form.module.scss';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from "react-redux";
import {createShortLink, selectLoading} from '../../store/slice/linkSlice'


const Form = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({
        mode: "onSubmit"
    });

    const onSubmit = ({url}: any) => {
        // @ts-ignore
        dispatch(createShortLink(url))
        reset();
    }

    return (
        <section className={classes.section}>
            <div className="container">
                <form autoComplete='off' className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="url"
                        placeholder="Shorten a link here..."
                        className={classes.input}
                        {...register('url', {
                            required: 'Please, add a link',
                            pattern: {
                                value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&/=]*)/g,
                                message: 'Please enter a valid URL'
                            }
                        })}
                        style={{
                            outlineColor: errors.url ? 'var(--secondary-300)' : 'currentcolor',
                            outlineWidth: errors.url ? '4px' : '1px'
                        }}
                        disabled={loading === 'loading'}
                    />
                    <Button variant="square" type="submit" size="medium" disabled={loading === 'loading'}>
                        Shorten it!
                    </Button>
                    {errors.url && (
                        <div className={classes.error}>
                            {errors.url.message as string}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export {Form};