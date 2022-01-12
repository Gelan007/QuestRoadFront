import React from "react";
import { Col } from "react-bootstrap";
import s from "./Posts.module.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./q1.jpg";
import img5 from "./q2.jpg";
import img6 from "./q3.jpg";
import img7 from "./q4.jpg";
import img8 from "./q5.jpg";
import img9 from "./q6.jpg";
import { NavLink } from "react-router-dom";
import AllPosts from "./AllPost";


// import s from "..style/Posts.module.css";

const Posts = (props) => {

    return (
        <div className={s.blog}>
            <h1 className={s.blogh1}>Блог</h1>
            <div>
            <div className={s.container}>
                <div className={s.row}>
               
                    <div className={s.col_4} >
                        <div>
                            <img className={s.img1} src={img1} alt="cut1"></img>
                        </div>
                        <div className={s.textcard}>
                            <h4 className={s.h4_cut}>Топ стрижек 2022</h4>
                            <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                            <div className={s.row}>
                                <h6 className={s.date}>May 20th 2020</h6>
                                <h5 className={s.read}><a href = "#">Read more</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className={s.col_4} >
                        <div>
                            <img className={s.img1} src={img2} alt="cut1"></img>
                        </div>
                        <div className={s.textcard}>
                            <h4 className={s.h4_cut}>Выбор кресла для барберов</h4>
                            <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                            <div className={s.row}>
                                <h6 className={s.date}>May 20th 2020</h6>
                                <h5 className={s.read}><a href = "#">Read more</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className={s.col_4} >
                        <div>
                            <img className={s.img1} src={img3} alt="cut1"></img>
                        </div>
                        <div className={s.textcard}>
                            <h4 className={s.h4_cut}>Как выбрать “своего” мастера</h4>
                            <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                            <div className={s.row}>
                                <h6 className={s.date}>May 20th 2020</h6>
                                <h5 className={s.read}><a href = "#">Read more</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.row}>
               
               <div className={s.col_4} >
                   <div>
                       <img className={s.img1} src={img4} alt="cut1"></img>
                   </div>
                   <div className={s.textcard}>
                       <h4 className={s.h4_cut}>Как выбрать барбершоп</h4>
                       <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                       <div className={s.row}>
                           <h6 className={s.date}>May 20th 2020</h6>
                           <h5 className={s.read}><a href = "#">Read more</a></h5>
                       </div>
                   </div>
               </div>
               <div className={s.col_4} >
                   <div>
                       <img className={s.img1} src={img5} alt="cut1"></img>
                   </div>
                   <div className={s.textcard}>
                       <h4 className={s.h4_cut}>Что делать с лысиной?</h4>
                       <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                       <div className={s.row}>
                           <h6 className={s.date}>May 20th 2020</h6>
                           <h5 className={s.read}><a href = "#">Read more</a></h5>
                       </div>
                   </div>
               </div>
               <div className={s.col_4} >
                   <div>
                       <img className={s.img1} src={img6} alt="cut1"></img>
                   </div>
                   <div className={s.textcard}>
                       <h4 className={s.h4_cut}>Какие средства нужны для прически?</h4>
                       <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                       <div className={s.row}>
                           <h6 className={s.date}>May 20th 2020</h6>
                           <h5 className={s.read}><a href = "#">Read more</a></h5>
                       </div>
                   </div>
               </div>
           </div> 
           <div className={s.row}>
               
               <div className={s.col_4} >
                   <div>
                       <img className={s.img1} src={img7} alt="cut1"></img>
                   </div>
                   <div className={s.textcard}>
                       <h4 className={s.h4_cut}>Как часто нужно стричься?</h4>
                       <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                       <div className={s.row}>
                           <h6 className={s.date}>May 20th 2020</h6>
                           <h5 className={s.read}><a href = "#">Read more</a></h5>
                       </div>
                   </div>
               </div>
               <div className={s.col_4} >
                   <div>
                       <img className={s.img1} src={img8} alt="cut1"></img>
                   </div>
                   <div className={s.textcard}>
                       <h4 className={s.h4_cut}>Кастомные стрижки - выбор в 2022 году</h4>
                       <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                       <div className={s.row}>
                           <h6 className={s.date}>May 20th 2020</h6>
                           <h5 className={s.read}><a href = "#">Read more</a></h5>
                       </div>
                   </div>
               </div>
               <div className={s.col_4} >
                   <div>
                       <img className={s.img1} src={img9} alt="cut1"></img>
                   </div>
                   <div className={s.textcard}>
                       <h4 className={s.h4_cut}>Стрижка горячей бритвой это что?</h4>
                       <h6 className={s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                       <div className={s.row}>
                           <h6 className={s.date}>May 20th 2020</h6>
                           <h5 className={s.read}><a href = "#">Read more</a></h5>
                       </div>
                   </div>
               </div>
           </div>
               
        </div>
      </div>
      </div>
    );
}
export default Posts;
