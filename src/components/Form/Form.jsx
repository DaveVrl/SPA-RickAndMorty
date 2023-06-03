import style from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
    const [errors , setErrors] = useState({});

    const [userData , setUserData] = useState(
        {
        email: "",
        password: ""
        }
    );

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
        

    return(
    <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="email">Email</label>
        <input className={style.input} name="email" type="email" value={userData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}

        <label className={style.label} htmlFor="password">Password</label>
        <input className={style.input} name="password" type="password" value={userData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}

        <button className={style.btn}>Submit</button>
    </form>
    )
}

export default Form;