import React from "react";
import Layout from "../components/layout";
import NextSeoModule from "../components/nextseo";

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
            <NextSeoModule
                title="About Us"
                description=""
                url="/about"
            />
            <Layout activeNav="about">
                <section className="hv1 w100 bgc-sww mh1">
                    <div className="container df fjc fdc pdt140">
                        <h1 className="fs32 lnh27  fw6 mb40">About Us</h1>
                        <div className="pdtb30">
                            <p className="fs18 lnh24 mb20">Your Gateway to Global Opportunities is at flyz global, we bring together a unique blend of services 
                            to cater to your aspirations of global exploration, professional growth, and educational enrichment. As a one-stop destination, 
                            we seamlessly integrate travel, staffing, immigration, and overseas education services to empower you on your journey to success. 
                            Discover a world of opportunities with Flyz global – Where Your Dreams Take Flight, Your Workforce Thrives, Your Journey Begins, and 
                            Your Education Knows No Boundaries. Welcome to a platform that goes beyond services; welcome to a community that cares about your 
                            aspirations and endeavors.  </p>
                        </div>
                    </div>
                </section>
                <section className="hv1 mh1">
                    <div className="container pdtb60">
                        <p className="fs24 fw6 mb40">Our team</p>
                        <div className="gd gg gtc3 mgtc1">
                            <div className="team-card df fac fdc fjc tac">
                                <div className="team-member-img mb20"></div>
                                <div className="team-member-job fs16 fw6 mb20"></div>
                                <p className="team-member-story fs16">Dedicated and results-driven marketing manager with 6 years of experience in developing and executing strategic marketing initiatives. Proven record of accomplishment of driving brand awareness, increasing lead generation, and optimizing marketing performance. Adept at collaborating with cross-functional teams to achieve business objectives.</p>
                            </div>
                            <div className="team-card df fac fdc fjc tac">
                                <div className="team-member-img mb20"></div>
                                <div className="team-member-job fs16 fw6 mb20"></div>
                                <p className="team-member-story fs16">Results-oriented marketing manager with a passion for driving brand success through innovative strategies and effective team leadership. Proven ability to navigate the ever-evolving landscape of digital marketing and deliver measurable results. A strategic thinker with a keen eye for market trends, I am committed to achieving business objectives and contributing to the growth of dynamic organizations.</p>
                            </div>
                            <div className="team-card df fac fdc fjc tac">
                                <div className="team-member-img mb20"></div>
                                <div className="team-member-job fs16 fw6 mb20">Marketing Manager</div>
                                <p className="team-member-story fs16">Passionate Marketing Manager with a focus on promoting unforgettable travel experiences. Committed to leveraging strategic marketing initiatives to drive bookings, enhance brand loyalty, and position Flyz global as a leader in the travel industry. I am excited to contribute creativity and expertise to further elevate the company's success in the dynamic world of travel and tourism.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            </>
        )
    }
}