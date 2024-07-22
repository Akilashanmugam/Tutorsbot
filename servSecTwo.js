import Link from "next/link";
import React from "react";

export default class ServSecTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <>
            <section className="bgc-sa">
            <div className="container pdtb40">
                <h1 className="fs24 lnh24 mfs20 fw6 clr color">{this.props.headTitle}</h1>
                <div className="gd gg gtc2 mgtc1 pdtb40">
                    {this.props.studyData.map((data,i) => {
                    return(
                    <div className="studyBoxT" key={i}>
                        <div className="df fac mb20">
                            <img src={data.img} alt="servimg" className="servImg" />
                            <p className="fs20 fw6 ml20">{data.title}</p>
                        </div>
                        <p className="fs18 mfs14 pdb40">{data.content}</p>
                        <Link href={data.path} className="learnLink btn3">Learn More </Link>
                    </div>
                    )
                    })}
                </div>
            </div>
            </section>

            <style jsx global>{`
            .studyBoxT {
                border: 2px solid #ea2d47;
                border-radius: 15px;
                background-color: #fbe1e4;
                padding: 1rem;
                position: relative;
                min-height: 320px;
                height: 100%;
                min-width: 450px;
                width: 100%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }
            .learnLink {
                font-size: 18px;
                font-weight: 600;
                color: green;
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
            .servImg {
                width: 100px;
                height: 100px;
            }
            .color {
                color: ${this.props.color};
            }
            @media only screen and (max-width: 1223px) {
                .studyBoxT {
                    margin: 0 auto;
                    min-width: 280px;
                    max-width: 400px;
                }
                .servImg {
                    width: 80px;
                    height: 80px;
                }
            }
            `}</style>
            </>
        )
    }
}