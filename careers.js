import React from "react";
import Layout from "../components/layout";
import CareerOverview from "../components/career-overview";
import NextSeoModule from "../components/nextseo";
import Contact from "../components/contact";


export default class Careers extends React.Component {
    constructor(props){
        super(props);
        this.state={
            status: false
        }
    }
    render(){
        return (
            <>
            <NextSeoModule
                title="Careers"
                description=""
                url="/careers"
            />
            <Layout activeNav="careers">
                <section className="bgImg bgc-rw">
                    <div className="container df fac fjc pdt100">
                        <h1 className="cw fs42 mfs28">Careers</h1>
                    </div>
                </section>
                {/* <section>
                    <div className="container pdtb60">
                        <p className="fs18 mfs16">Consequat mollit exercitation ullamco deserunt officia deserunt esse. Ipsum enim cillum nisi enim pariatur sunt eiusmod tempor ullamco. Ullamco tempor dolor aute occaecat quis laboris sit veniam duis tempor aliqua minim ut sit. Veniam officia ut ipsum incididunt enim labore. Sit incididunt est laboris nulla sunt ad eiusmod Lorem dolore elit labore velit. Ea Lorem consequat nulla cillum incididunt incididunt enim non et. Nostrud magna mollit proident aliquip ea et nostrud ut. Officia veniam nisi id in do voluptate eu eu irure esse irure excepteur. Irure adipisicing fugiat minim exercitation. Voluptate nisi est dolore veniam adipisicing occaecat commodo est proident ullamco ullamco Lorem incididunt. Ipsum ex eu eu voluptate incididunt labore exercitation commodo amet sint. Aliqua cillum eiusmod voluptate consequat exercitation reprehenderit veniam elit.</p>
                    </div>
                </section> */}
                {this.state.status === true ?
                <CareerOverview/>
                :
                <section>
                    <div className="container pdtb60">
                        <p className="fs28 fw6 tac">No Jobs Available</p>
                    </div>
                </section>
                }
                <Contact/>
                <style jsx global>{`
                    .bgImg {
                        width: 100%;
                        height: 70vh;
                    }
                 @media only screen and (max-width: 1223px) {
                }
                `}</style>

            </Layout>

            </>
        )
    }
}