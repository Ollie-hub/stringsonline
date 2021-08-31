import React from 'react';
import { useForm } from 'react-hook-form';
import './form.scss'

export default function Form() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        let formData = new FormData();

        formData.append('firstName', data.firstname)
        formData.append('lastname', data.lastname)
        formData.append('', data.zipcode)
        formData.append('', data.email)

        let options = {
            method: 'POST',
            body: formData
        }
        try {
            const url = "https://api.mediehuset.net/snippets/contact" //api here 
            fetch(url, options)
                .then(response => response.json())
                .then(data => console.log(data))

        }
        catch (error) {
            console.error(error);
        }
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-div">
                <label className="form-label" htmlFor="firstname">Fornavn:</label>
                <input className="form-input" type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
                {errors.firstName && <span className="error">Du skal indtaste dit fornavn</span>}
            </div>
            <div className="form-div">
                <label className="form-label" htmlFor="lastname">Efternavn:</label>
                <input className="form-input" type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
                {errors.lastName && <span className="error">Du skal indtaste dit efternavn</span>}
            </div>
            <div className="form-div">
                <label className="form-label" htmlFor="zipcode">Postnummer:</label>
                <input className="form-input" type="number" placeholder="Zip code" name="zipcode" {...register('zipcode', { required: true, pattern: /^[0-9]+$/i })} />
                {errors.zipcode && <span className="error">Du skal indtaste dit postnummer</span>}
            </div>
            <div className="form-div">
                <label className="form-label" htmlFor="email">Email:</label>
                <input className="form-input" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span className="error">Du skal indtaste dit email</span>}
            </div>
            <div className="form-div">
                <input className="form-submit" type="submit" />
            </div>
        </form>
    )
}