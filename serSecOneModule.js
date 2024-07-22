import React from "react";
import Breadcrumbs from "./breadcrumb";


export default class ServSecOneModule extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
            <section className="w100 h1v bgFullImg pr">
                <div className="container df fdc fjc mfac mpdt140 pr z">
                    <Breadcrumbs tColor="#fff" />
                    <div className="df fjsb fac mfdcr">
                        <div className="w50 mw100 df mfac fdc">
                            <h1 className="fs42 mfs28 mb20 lh1 mmb10 cw">{this.props.title}</h1>
                            <p className="fs18 mb20 mfs16 lh27 mmb10 cw">{this.props.content}</p>
                            <a href={this.props.path} className="btn-first bgc-lr cw">Contact for consulting</a>
                        </div>
                    </div>
                </div>
                <div className="black-layout"></div>
            </section>
            <style jsx global>{`
                .bgFullImg {
                    background-image: url(${this.props.bgImg});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }

                @media only screen and (max-width: 1223px) {
                    .ilusImg {
                        width: 260px;
                        height: 120px;
                        background-position: center;
                        margin-bottom: 10px;
                    }
                    .bgFullImg {
                        background-image:url(${this.props.bgImgRes});
                    }
                }
            `}</style>
            </>
        )
    }
}