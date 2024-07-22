import React from "react";
import Layout from "../components/layout";
import Contact from "../components/contact";
import NextSeoModule from "../components/nextseo";

export default class Contacts extends React.Component {
    render() {
        return (
            <>
            <NextSeoModule
                title="Contact Us"
                description=""
                url="/contact-us"
            />
            <Layout>
            <section className="bgc-sa2">
                <div className="container pdt140">
                <div className="gd gg gtc3 mgtc1 pdtb40">
                    <div className="contactCard df fdc fac tac fjc">
                        <img src="/images/serv/niche.svg" alt="contact" className="contactIcon mb20"/>
                        <p className="fs18 mfs16 mb20">Et cillum aliqua aute minim.Enim dolor incididunt deserunt elit.</p>
                        <a href="tel:+917825888899" className="fs18 mfs16 clr fw5">+91 7825 88 88 99</a>
                    </div>
                    <div className="contactCard df fdc fac tac fjc">
                        <img src="/images/serv/niche.svg" alt="contact" className="contactIcon mb20"/>
                        <p className="fs18 mfs16 mb20">Et cillum aliqua aute minim.Enim dolor incididunt deserunt elit.</p>
                        <a href="mailto:flyzglobal@gmail.com" className="fs18 mfs16 clr fw5">info@flyzflobal.com</a>
                    </div>
                    <div className="contactCard df fdc fac tac fjc">
                        <img src="/images/serv/niche.svg" alt="contact" className="contactIcon mb20"/>
                        <p className="fs18 mfs16 mb20">NO.181A/30/2, Masha Allah Complex<br></br>S.N.High Road, Sripuram<br></br>Tirunelveli, Tamil Nadu, India - 627007</p>
                        <a href="#" className="fs18 mfs16 clr fw5">View on Google Maps</a>
                    </div>

                </div>
                </div>
            </section>
            <section>
            <div className="container">
                <div className="maps"></div>
            </div>
            </section>
            <Contact/>
            </Layout>
            </>
        )
    }
}