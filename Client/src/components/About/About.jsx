import style from "./About.module.css";

const About = () => {
    return(
        <div className={style.container}>
            <h1 className={style.title}>Hi i'm David!</h1>
            <p className={style.text}>I have skills in HTML, CSS, and JavaScript. Currently, I am professionally refining my abilities at Henry Academy, where I am acquiring advanced skills in JavaScript, ReactJS, ReduxJS, NodeJS, SQL, and more.</p>
            <h2 className={style.subtitle}>This is my first practice with ReactJS</h2>
            <h1 className={style.endtitle}>¡Enjoy it!</h1>
        </div>
    )
}

export default About;