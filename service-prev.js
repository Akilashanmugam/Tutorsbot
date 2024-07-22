import React from "react";
import Breadcrumbs from "../components/breadcrumb";

export default class ServicePrev extends React.Component{
    render(){
        return(
            <>
            <section className="bgc-sww">
                <div className="container pdt140">
                    <Breadcrumbs />
                    <div className="df fac fjsb mfdcr pdb60">
                        <h1 className="fs42 fw6 mfs28 clr w4 mw100 mtac">{this.props.name}</h1>
                        <img src={this.props.src} alt="product" className="serv-pre-img" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <p className="fs18 mfs16 mb20">{this.props.contents}</p>
                    {/* <p className="fs18 mfs16 mb20">Eu non labore est veniam. Nisi officia nisi pariatur labore eu nisi et est cupidatat irure amet esse et sint. Proident sint voluptate reprehenderit mollit eiusmod aute culpa.</p>
                    <div className="df fac mb20">
                        <div className="bullet"></div>
                        <p className="fs18 mfs16 w100">Tempor fugiat laborum veniam excepteur veniam aute.</p>
                    </div>
                    <div className="df fac mb20">
                        <div className="bullet"></div>
                        <p className="fs18 mfs16 w100">Tempor fugiat laborum veniam excepteur veniam aute.</p>
                    </div> */}
                </div>
            </section>
            </>
        )
    }
}