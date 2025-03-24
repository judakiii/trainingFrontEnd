import style from './Footer.module.css'
import x from './pictures/X.svg'
import linkdin from './pictures/linkdin.svg'
import whtsapp from './pictures/whatsapp.svg'
import instagram from './pictures/instagram.svg'
import github from './pictures/github.svg'
import safeer from '../header/pictures/safeer.svg'

const Footer = () =>{
    return(
        <div className={style.footer}>
            <div className={style.social}>
                <h3>شبکه‌های اجتماعی ما</h3>
                <div>

                    <a href='#'><img src={x}/></a>
                    <a href='#'><img src={linkdin}/></a>
                    <a href='#'><img src={whtsapp}/></a>
                    <a href='#'><img src={instagram}/></a>
                    <a href='#'><img src={github}/></a>

                </div>
            </div>

            <div className={style.links}>
            <h3> لورم ایپسوم </h3>
            <a href='#'>لورم ایپسوم </a>
            <br/>
            <a href='#'>لورم ایپسوم </a>
            <br/>
            <a href='#'>لورم ایپسوم </a>
            </div>

            
            <div className={style.links}>
            <h3> لورم ایپسوم </h3>
            <a href='#'>لورم ایپسوم </a>
            <br/>
            <a href='#'>لورم ایپسوم </a>
            <br/>
            <a href='#'>لورم ایپسوم </a>
            </div>

            <div className={style.links}>
            <h3> لورم ایپسوم </h3>
            <a href='#'>لورم ایپسوم </a>
            <br/>
            <a href='#'>لورم ایپسوم </a>
            <br/>
            <a href='#'>لورم ایپسوم </a>

            </div>

            <div className={style.address}>
                <img src={safeer}/>
                <p>آدرس: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون </p>

            </div>

        </div>
    )
}
export default Footer;