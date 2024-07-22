import React from "react";
import Breadcrumbs from "./breadcrumb";
import Link from "next/link";


export default class ServSecOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
            <section className="bgc-sww w100 h1v mh100">
                <div className="container df fdc fjc mfac mpdt140">
                    <Breadcrumbs tColor="#000" />
                    <div className="df fjsb fac mfdcr">
                        <div className="w50 mw100 df mfac fdc">
                            <h1 className="fs42 mfs28 mb20 lnh27 mlnh30 mmb10">{this.props.title}</h1>
                            <p className="fs18 lnh24 mb20 mfs16 mlnh21  mmb10">{this.props.content}</p>
                            <Link href={this.props.path} className="btn-first bgc-lr cw">Contact for consulting</Link>
                        </div>
                        <div className="ilusImg"></div>
                    </div>
                </div>
            </section>
            <style jsx global>{`
                .ilusImg {
                    background: url(${this.props.ilus}) no-repeat;
                    background-size: contain;
                    width: 40%;
                    height: 300px;
                }

                @media only screen and (max-width: 1223px) {
                    .ilusImg {
                        width: 260px;
                        height: 120px;
                        background-position: center;
                        margin-bottom: 10px;
                    }
                }
            `}</style>
            </>
        )
    }
}