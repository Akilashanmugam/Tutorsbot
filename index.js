import React from "react";
import Layout from "../components/layout";
import SliderOne from "../components/sliderOne";
import NextSeoModule from "../components/nextseo";
import Link from "next/link";

const slideData1 = [
    {title:"Overseas Education",path:"/services/overseas-education",path2:"/contact-us",img:"/images/overseas-edu-illus.svg",content:"Discover endless educational opportunities worldwide with our overseas education services. We prioritize quality education in shaping your future. Our platform provides insights into top universities, courses, scholarships, and admissions processes. From personalized counseling to application support, we're dedicated to helping you reach your academic goals. We offer comprehensive resources for those considering overseas study, guiding you through every step from choosing a destination and program to securing funding and visas."},
    {title:"Mobility",path:"/services/mobility-services",path2:"/contact-us",img:"/images/mobility-illus.svg",content:"Navigating the complexities of immigration can be challenging, but the right guidance can make all the difference. At Flyz Global Services, our mission is to provide expert guidance on visas, work permits, residency, and compliance. Our goal is to streamline the immigration process, making your transition smoother and more efficient. With over 23 years of experience, our team of immigration experts guides clients from all occupations through the visa and citizenship process. We handle a wide range of cases for destinations around the world, from temporary work permits to student visas to investment immigration and beyond. "},
    {title:"Travels",path:"/services/travels-services",path2:"/contact-us",img:"/images/travels-illus.svg",content:"At Flyz global, we believe travel has the power to transform lives when done right. Since 2001, we have provided once-in-a-lifetime travel experiences that expand perspectives and foster cultural understanding. We craft customized overseas trips that allow our clients to authentically experience the people and places that make our world so beautifully diverse. We are focused solely on crafting overseas adventures; we provide highly personalized services and arrange every detail so you can relax and make once-in-a-lifetime memories. And with our comprehensive travel insurance and 24/7 global support, you always have peace of mind on the journey of a lifetime."},
    {title:"Staffing",path:"/services/staffing-services",path2:"/contact-us",img:"/images/staff-illus.svg",content:"Unlock the potential of your workforce with our staffing solutions.  Finding top talent internationally can give your company a valuable advantage in today's global business world. At Flyz global, we specialize in overseas staffing - helping forward-thinking companies hire exceptionally remote employees from around the world. If you are looking to unlock access to specialized talent abroad, contact our team today. We will work as an extension of your HR department to build your distributed global workforce. With Flyz global as your partner, you can assemble teams with borderless talent optimized to drive your unique business goals."}

]

const servData = [
    {title:"Mobility Services",img:"/images/mobility-illus.svg",path:"/services/mobility-services"},
    {title:"Staffing Services",img:"/images/staff-illus.svg",path:"/services/staffing-services"},
    {title:"Travels Services",img:"/images/travels-illus.svg",path:"/services/travels-services"}
]

export default class Index extends React.Component{
    render(){
        return(
            <>
            <NextSeoModule
                title="Flyz Global"
                description=""
                url="/"
            />
            <Layout activeNav="home">
                <SliderOne slideData={slideData1} />
                <section>
                    <div className="container gd gg gtc2 mgtc1 pdtb40">
                        <div className="df fdc w80 mw100 mfac">
                            <h1 className="fs42 lnh27 mlnh21 mb20 mfs24 clr">Overseas Education</h1>
                            <p className="fs18 lnh24 mb20 mfs16 ">Flyzglobal providing the overseas education in our services. Overseas education refers to a dynamic concept that involves a journey or movement of people, minds, or ideas across political and cultural frontiers. It is facilitated by the globalization phenomenon, which increasingly erases the constraints of geography on economic, social and cultural arrangements.</p>
                            <Link href="/services/overseas-education" className="btn-first bgc-lr cw mmb20">View Our Services</Link>
                        </div>
                        <div className="gd gg gtc2 mgtc1">
                            <div className="studyBox df fdc">
                                <img src="/images/serv/study-dest.svg" alt="overseasIcon" className="secIcon mb20"></img>
                                <Link href="/services/overseas-education/study-abroad" className="fs20 fw6 clr mfs18 link">Study Destinations</Link>
                            </div>
                            <div className="studyBox df fdc ">
                                <img src="/images/serv/admi-plac.svg" alt="overseasIcon" className="secIcon mb20"></img>
                                <Link href="/services/overseas-education/admission-placement" className="fs20 fw6 clr mfs18 link tac lh1">Admission Placement</Link>
                            </div>
                            <div className="studyBox df fdc mt20">
                                <img src="/images/serv/stude-guid.svg" alt="overseasIcon" className="secIcon mb20"></img>
                                <Link href="/services/overseas-education/college-assistance" className="fs20 fw6 clr mfs18 link">Student Guidance</Link>
                            </div>
                            <div className="studyBox df fdc mt20">
                                <img src="/images/serv/stude-even.svg" alt="overseasIcon" className="secIcon mb20"></img>
                                <Link href="/services/overseas-education/documentation-assistant" className="fs20 fw6 clr mfs18 link">Student Events</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bgc-sa">
                    <div className="container gd gg gtc2 mgtc1 pdtb60">
                        <div className="df fdc w80 mw100 mfac">
                            <h1 className="fs42 mb20 mfs24 lnh50 mlnh30">Study In Dream Institution</h1>
                            <p className="fs18 lnh24 mb20 mfs16 mlnh21">Flyz global will provide one-on-one counseling services to help you build a customized roadmap for your situation and educational goals. Our network of study abroad advisors are with you every step of the way. We believe an international education should be accessible to all. Let us guide you on the path to achieving your dreams of studying abroad and expanding your worldview. Begin navigating our resources to get started today. Singapore offers the total package - academics, research, technology, and innovation - critical to success after graduation. Let us guide you on this exciting journey! </p>
                            <Link href="/services/overseas-education" className="btn-first bgc-lr cw mmb20">Learn More &gt;&gt;&gt;</Link>
                        </div>
                        <div className="gd gg gtc2 mgtc1">
                            <Link href="/services/overseas-education/study-in-dubai" className="studyBox df fdc pdt40 mpdt0">
                                <img src="/images/serv/dubai.png" alt="overseasIcon" className="secIcon mb20"></img>
                                <p className="fs20 fw6 cb mfs18 link">Dubai</p>
                            </Link>
                            <Link href="/services/overseas-education/study-in-singapore" className="studyBox df fdc">
                                <img src="/images/serv/singapore.png" alt="overseasIcon" className="secIcon mb20"></img>
                                <p className="fs20 fw6 cb mfs18 link">Singapore</p>
                            </Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container pdtb60">
                        <h1 className="fs42 mb20 mfs24 clr tac">Other Services</h1>
                        <div className="gd gg gtc3 mgtc1">
                        {servData.map((data, i) => {
                            return(
                            <div key={i}>
                            <Link href={data.path} className="studyBoxT2 df fdc fac fjc">
                                <div className="serBox">
                                    <img src={data.img} className="servBOxImg mb20"/>
                                    <p className="fs32 tac fw6 cb mfs28">{data.title}</p>
                                </div>
                                <div className="fs28 cb dn more">Learn More &gt;&gt;&gt;</div>
                            </Link>
                            </div>
                             )
                            })}
                        </div>
                    </div>
                </section>
                <section className="bgc-sa">
                    <div className="container pdtb60">
                        <h1 className="fs24 mfs20 fw6">Available Payment Options</h1>
                        <div className="gd gg gtc4 mgtc1 pdtb60">
                            <div className="df fdc fac fjc">
                                <img src="/images/emi.svg" alt="payment" className="payImg"/>
                                <p className="fs18 fw6">EMI Method</p>
                            </div>
                            <div className="df fdc fac fjc">
                                <img src="/images/divide.svg" alt="payment" className="payImg"/>
                                <p className="fs18 fw6">Divided Payment</p>
                            </div>
                            <div className="df fdc fac fjc">
                                <img src="/images/scholarship.svg" alt="payment" className="payImg"/>
                                <p className="fs18 fw6">Scholarship</p>
                            </div>
                            <div className="df fdc fac fjc">
                                <img src="/images/member.svg" alt="payment" className="payImg"/>
                                <p className="fs18 fw6">Membership</p>
                            </div>

                        </div>
                    </div>
                </section>
                <style jsx global>{`
                    .studyBoxT2 {
                        border: 2px solid #ea2d47;
                        border-radius: 15px;
                        background-color: #fad8dc;
                        padding: 20px;
                        min-height: 350px;
                    }
                    .studyBoxT2 .serBox {
                        transition: transform .3s ease-in-out;
                    }
                    .studyBoxT2:hover .serBox {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        transform: translateX(30px);
                    }
                    .studyBoxT2:hover .serBox>p {
                        font-size: 24px;
                        width: 50%;
                        text-align: left;
                        line-height: 1;
                        margin-left: 20px;
                    }
                    .studyBoxT2:hover .servBOxImg {
                        width: 150px;
                        height: 150px;
                    }
                    .studyBoxT2:hover .more {
                        display: block;
                    }
                 @media only screen and (max-width: 1223px) {
                    .studyBoxT2 {
                        width: 280px;
                        margin: 0 auto;
                    }
                    .studyBoxT2:hover .serBox>p {
                        font-size: 20px;
                        width: 50%;
                    }
                    .studyBoxT2:hover .servBOxImg {
                        width: 100px;
                        height: 100px;
                    }
                    .studyBoxT2:hover .more {
                        font-size: 18px;
                    }
            
                }
                `}</style>
            </Layout>
            </>
        )
    }
}