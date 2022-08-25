import React from 'react';
import {Button} from "../Button";
import classes from './style/Form.module.scss';
import {useForm} from 'react-hook-form'


const Form = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        // reset
    } = useForm({
        mode: "onSubmit"
    });

    const onSubmit = (data: any) => {
        console.log(data)
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
                    />
                    <Button variant="square" type="submit" size="medium">
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