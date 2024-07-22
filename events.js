import React from "react";
import Layout from "../components/layout";
import { CorporateContactJsonLd, LocalBusinessJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";
import ServSecOneModule from "../components/serSecOneModule";

export default class Events extends React.Component{
    render(){
        return(
            <>
            <NextSeo
                title="Events"
                description="writeing"
                openGraph={{
                    type: 'website',
                    url: 'https://www.flyzglobal.com/',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.flyzglobal.com',
                            width: 400,
                            height: 600,
                            alt: 'Og Img alt',
                        }
                    ]
                }}
            />
            <CorporateContactJsonLd
                url="http://www.flyzglobal.com"
                logo="http://www.flyzglobal.com/logo.png"
                contactPoint={[
                    {
                        telephone: '+1-401-555-1212',
                        contactType: 'customer service',
                        areaServed: 'US',
                        availableLanguage: ['English','Spanish','Fre']
                    }
                ]}
            />
            <SocialProfileJsonLd
                type="organization"
                name="flyzglobal"
                url="http://www.flyzglobal.com"
                sameAs={[
                    'https://www.facebook.com/flyzglobal',
                    'https://twitter.com/flyzglobal',
                    'https://www.linkedin.com/in/flyzglobal',
                    'https://www.instagram.com/flyzglobal'
                    
                ]}
            />
            <LocalBusinessJsonLd
                type="Store"
                id="http://flyzglobal.com"
                name="flyzglobal"
                description="something here to write you"
                url="http://www.flyzglobal.com"
                telephone="+9188998899"
                address={{
                    streetAddress: '18 Sa, Ave',
                    addressLocality: 'tambaram',
                    addressRegion: 'CA',
                    postalCode: '600028',
                    addressCountry: 'INDIA',
                }}
                geo={{
                    latitude: '22.20920',
                    longitude: '220.20',
                }}
                images={[
                    'https://flyzglobal.com/photos/1X1/photo.jpg',
                    'https://flyzglobal.com/photos/1X1/photo.jpg'
                ]}
                openingHours={[
                    {
                        opens: '08:30',
                        closes: '23:50',
                        dayOfWeek: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                        ]
                    }
                ]}
            />
            <Layout activeNav="events">
                <ServSecOneModule
                    title="Events"
                    content="Your Technical needs & business objectives are understood by our Solutions Experts"              
                    path="/contact-us"
                    bgImg="/images/bg-img-one.jpg"
                />
                <section>
                    <div className="container">
                        <p className="fs28 fw6 mb20 mfs24 mtac">Upcoming Education Events</p>
                        <div className="eventsBox df fjsb mfdc">
                            <div className="boxLeft w7 mw100">
                                <p className="fs28 fw6 clr mb20 mfs24 mtac">Edu Consulting</p>
                                <div className="mb20">
                                    <p className="fs24 fw6 clr mb20 mfs20 mtac">Agenda :</p>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                </div>
                                <p className="fs24 fw6 clr mfs20 tac mb20">Booking Close at 51 hrs 24 min 45 sec</p>
                            </div>
                            <div className="boxRight ml40 w3 mw100 mml0">
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Type</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">Webinar</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Duration</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">One Day</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Date</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">10 Feb</p></div>
                                <div className="pdtb40 mdf mfjc"><a href="/" className="btn-first bgc-lr cw df fjc">Book Now</a></div>
                            </div>
                        </div>
                        <div className="mtb20"></div>
                        <div className="eventsBox df fjsb mfdc">
                            <div className="boxLeft w7 mw100">
                                <p className="fs28 fw6 clr mb20 mfs24 mtac">Edu Consulting</p>
                                <div className="mb20">
                                    <p className="fs24 fw6 clr mb20 mfs20 mtac">Agenda :</p>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                </div>
                                <p className="fs24 fw6 clr mfs20 tac mb20">Booking Close at 51 hrs 24 min 45 sec</p>
                            </div>
                            <div className="boxRight ml40 w3 mw100 mml0">
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Type</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">Webinar</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Duration</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">One Day</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Date</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">10 Feb</p></div>
                                <div className="pdtb40 mdf mfjc"><a href="/" className="btn-first bgc-lr cw df fjc">Book Now</a></div>
                            </div>
                        </div>
                        <p className="fs28 fw6 mb20 mfs24 mtac">Career Events</p>
                        <div className="eventsBox df fjsb mfdc">
                            <div className="boxLeft w7 mw100">
                                <p className="fs28 fw6 clr mb20 mfs24 mtac">Career Selection Consulting</p>
                                <div className="mb20">
                                    <p className="fs24 fw6 clr mb20 mfs20  mtac">Agenda :</p>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                    <li className="df ml20"><div className="listImg"></div><p className="fs18 mfs16">Experienced Graphic Designer with a demonstrated history of working in</p></li>
                                </div>
                                <p className="fs24 fw6 clr mfs20 tac mb20">Booking Close at 51 hrs 24 min 45 sec</p>
                            </div>
                            <div className="boxRight ml40 w3 mw100 mml0">
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Type</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">On Stage</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Duration</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">One Day</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Date</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">10 Feb</p></div>
                                <div className="df mb20 tal fjsb w100"><p className="fs18 mfs16">Venue</p><p className="fs18 fw6 mfs16 ml40 df fjfs w100 tal">DHA mahal<br/>Chennai</p></div>
                                <div className="pdtb40 mdf mfjc"><a href="/" className="btn-first bgc-lr cw df fjc">Book Now</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx global>{`                 

                    @media only screen and (max-width: 1223px) {

                    }
                `}</style>
            </Layout>
            </>
        )
    }
}