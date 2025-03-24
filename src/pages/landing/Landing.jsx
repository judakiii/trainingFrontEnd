import React from "react";
import style from './Landing.module.css'
import banerImage from './pictures/baner.png'
import leftFlash from './pictures/Icon.svg'
import  Card  from "../../components/common/Card";
import vector from './pictures/Vector (Stroke).svg'
import pattern from './pictures/pattern.png'
import vector1 from './pictures/vetor1.svg'
import target from './pictures/target.svg'
import puzzel from './pictures/puzzel.svg'
import release from './pictures/Release.svg'
import Button from "../../components/common/Button";
import aboutUs from './pictures/Group 30.svg'
const Landing = () => {

  return(
  <div>
    <div className={style.baner}>

            <div className={style.text}>

        <p>لورم ایپسوم</p>
        <p>لورم ایپسوم لورم ایپسوم</p>
        <div className={style.start}>

          <a href="#">الان ماجراجویت رو شروع کن</a>

          <img src={leftFlash}/>
          
        </div>
      </div>

      <img src={banerImage}/>
      
    </div>
    <div className={style.title1}>
        <h3>راهکار‌های صنعتی سفیر</h3>
        <div className={style.more1}>
             <img src={vector}/>
             <a href="#">مشاهده بیشتر</a>
             
        </div>
      </div>
    
    <div className={style.industry}>

      <Card/>
      <Card/>
      <Card/>
      
    </div>
    <div className={style.title1}>
        <h3>محصولات هوشمند سفیر</h3>
        <div className={style.more1}>
             <img src={vector}/>
             <a href="#">مشاهده بیشتر</a>
             
        </div>
      </div>
      <div className={style.pattern}>
        <img src={pattern}/>
      </div>

      <div className={style.title2}>
        <h3>ما چه ‌کارهایی میکنیم</h3>
      </div>
      <div className={style.aboutUs}>

        <div className={style.orangeCard}>
          <img src={vector1}/>
          <h3>لورم ایپسوم متن ساختگی</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با  از طراحان گرافیک است، چاپگرها </p>
        </div>

        <div className={style.blackCard}>
          <img src={target}/>
          <h3>لورم ایپسوم متن ساختگی</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با  از طراحان گرافیک است، چاپگرها </p>
        </div>

        <div className={style.orangeCard}>
          <img src={puzzel}/>
          <h3>لورم ایپسوم متن ساختگی</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با  از طراحان گرافیک است، چاپگرها </p>
        </div>

        <div className={style.blackCard}>
          <img src={release}/>
          <h3>لورم ایپسوم متن ساختگی</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با  از طراحان گرافیک است، چاپگرها </p>
        </div>
      </div>

      <div className={style.conectUs}>
        <img src={aboutUs}/>
        <div>
          <h3>ارتباط با ما</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه سچاپگرها و متون بلکه روزنامه و مجله در س</p>
          <Button></Button>
        </div>
        
      </div>




    
  </div>
  );

};

export default Landing;
