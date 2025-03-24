import style from './Card.module.css'
import image from './pictures/Vector.png'
import Button from './Button'

function Card() {

    return(
        <div className={style.card}>
            <img src={image} alt="industry" />
            <h3>متن با موفقیت کپی شد</h3>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در سچاپگرها و متون بلکه روزنامه و مجله در سبلکه روزنامه و مجله در س</p>
            <Button className={style.conect}></Button>
        </div>
    )
}

export default Card;