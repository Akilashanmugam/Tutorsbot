import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class SliderOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            dots: false,
          }
        },]
    };
    
    return (
      <>
        <div className="slide-wrap">
        <Slider {...settings}>
            {this.props.slideData.map((data, i) => {
            return (
            <div key={i}>
                <section className="bgc-sww w100 h1v m-high">
                    <div className="container df fjsb mfjc fac mfdcr pdt100 mpdt140">
                        <div className="w50 mw100 mfac df fdc">
                            <h1 className="fs42 lnh27 mb20 mfs20 mmb10">{data.title}</h1>
                            <p className="fs18 mb20 mfs14 mmb10">{data.content}</p>
                            <div className="df mfdc">
                            <a href={data.path} className="btn-first bgc-lr cw mmb10">View Our Services</a>
                            <a href={data.path2} className="btn-first bgc-lr cw ml40 mml0">Contact for Consulting</a>
                            </div>
                        </div>
                        <img src={data.img} className="ilusImg"></img>
                    </div>
                </section>
            </div>
            )
            })}
        </Slider>
        </div>

        <style jsx global>{`
        
            .slide-wrap {
                width: 100%;
                overflow: hidden;
            }
            .slick-dots {
                bottom: 25px;
            }
            .slick-dots li button:before {
                color: #fff;
                opacity: 1;
                font-size: 1rem;
            }
            .slick-dots li.slick-active button:before {
                color: #ea2d47;
                font-size: 1.3rem;
            }
            .ilusImg {
              width: 40%;
              height: 300px;
            }

            @media only screen and (max-width: 1223px) {
              .ilusImg {
                width: 260px;
                height: 120px;
                margin-bottom: 10px;
                margin-top: 20px;
            }
            .m-high{
              height: auto;
            }
            }
        `}</style>
      </>
    );
  }
}