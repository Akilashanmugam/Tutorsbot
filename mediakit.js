import React from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";

export default class MediaKit extends React.Component {
    render() {
        return (
            <>
            <Layout>
            <section className="">
                <div className="container pdt140">
                    <h1 className="fs42 fw5 mfs32 mb40">Media Kit</h1>
                    <div className="gd gg gtc3 mgtc1">
                        <div className="contact-card df fdc fjc fac tac">
                            <p className="fs18 fw6 mb20">Web Media Kit</p>
                            <img src="/images/web-media.svg" className="mediImg" />
                            <a href="/images/flyz-logo.svg" className="locationBtn downLoBtn" download>Download</a>
                            <label className="fs18 df mb40">Filetype:<p className="fs18 clr">&nbsp;Svg</p></label>
                            <p className="fs18">Download the Flyz Global files for Printing use</p>
                        </div>
                        <div className="contact-card df fdc fjc fac tac">
                            <p className="fs18 fw6 mb20">Media Print Kit</p>
                            <img src="/images/media-print.svg" className="mediImg" />
                            <a href="/images/flyz-logo.png" className="locationBtn downLoBtn" download>Download</a>
                            <label className="fs18 df mb40">Filetype:<p className="fs18 clr">&nbsp;Png</p></label>
                            <p className="fs18">Download the Flyz Global files for Printing use</p>
                        </div>
                        {/* <div className="contact-card df fdc fjc fac tac">
                            <p className="fs18 fw6 mb20">Brand Usage Guide</p>
                            <img src="/images/brand.svg" className="mediImg" />
                            <a href="" className="locationBtn downLoBtn" download>Download</a>
                            <label className="fs18 df mb40">Filetype:<p className="fs18 co">Zip</p></label>
                            <p className="fs18">Download the Aqwah logo files for Printing use</p>
                        </div> */}

                    </div>
                </div>
            </section>
            <Contact />
            </Layout>
            </>
        )
    }
}