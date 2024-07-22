import Link from "next/link";
import React from "react";


export default class Footer extends React.Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
        <>
        <footer className="bgc-lblack">
            <div className="container">
                <div className="df fjsb pdtb20 mfdc">
                <ul>
                    <li className="mb20"><Link href="/" className="logo-link"></Link></li>
                    <li className="mb20"><p className="fs28 fw5 cw mfs24">Stay in touch</p> </li>
                    <ul className="df fac mmb20">
                        <li><Link href="#" className="s-icon"><img src="/images/Facebook.svg" className="s-image" /></Link></li>
                        <li><Link href="#" className="s-icon"><img src="/images/Instagram.svg" className="s-image" /></Link></li>
                        <li><Link href="#" className="s-icon"><img src="/images/Twitter.svg" className="s-image" /></Link></li>
                        <li><Link href="#" className="s-icon"><img src="/images/Pinterest.svg" className="s-image" /></Link></li>
                    </ul>
                </ul>
                <ul className="mmb20">
                    <li className="mb20"><p className="fs24 fw5 cw mfs20">Quick Links</p></li>
                    <li className="mb10"><Link href="/" className="fs18 cw mfs16 fl">Home</Link> </li>
                    <li className="mb10"><Link href="/services" className="fs18 cw mfs16 fl">Services</Link></li>
                    <li className="mb10"><Link href="/about" className="fs18 cw mfs16 fl">About us</Link></li>
                    <li className="mb10"><Link href="/contact-us" className="fs18 cw mfs16 fl">Contact us</Link></li>
                    <li className="mb10"><Link href="/mediakit" className="fs18 cw mfs16 fl">Media Kit</Link></li>
                </ul>
                <ul className="mmb20">
                    <li className="mb20"><p className="fs24 fw5 cw mfs20">Services</p></li>
                    <li className="mb10"><Link href="/services/overseas-education" className="fs18 cw mfs16 fl">Overseas Education</Link> </li>
                    <li className="mb10"><Link href="/services/mobility-services" className="fs18 cw mfs16 fl">Mobility</Link> </li>
                    <li className="mb10"><Link href="/services/staffing-services" className="fs18 cw mfs16 fl">Staffing</Link> </li>
                    <li className="mb10"><Link href="/services/travels-services" className="fs18 cw mfs16 fl">Travels</Link> </li>
                </ul>
                <ul>
                    <li className="mb20"><p className="fs24 fw5 cw mfs20">Contact</p></li>
                    <li className="mb10 df fac"><Link href="tel:+917825888899" className="df fac"><div className="add-icon"><i className="fas fa-phone-alt"></i></div><p className="fs18 cw mfs16">+91 7825 88 88 99</p></Link></li>
                    <li className="mb10 df fac"><Link href="mailto:flyzglobal@gmail.com" className="df fac"><div className="add-icon"><i className="fas fa-envelope"></i></div><p className="fs18 cw mfs16">flyzglobal@gmail.com</p></Link></li>
                    <li className="mb10 df fafs"><div className="add-icon"><i className="fas fa-map-marker-alt"></i></div><p className="fs18 cw mfs16">NO.181A/30/2, Masha Allah Complex<br></br>S.N.High Road, Sripuram<br></br>Tirunelveli, Tamil Nadu, India - 627007</p></li>
                </ul>
                </div>
                <div className=" df fac fjsb mfdc pdlr20">
                <p className="fs16 mfs14 cw o6 mfs12">&copy; {currentYear} Copyrights Reserved by FlyzGlobal.</p>
                <p className="fs16 mfs14 cw o6 mfs12">Design and Developed by <Link href="https://www.opseazy.com/" className="opsIcon">OpsEazy</Link></p>
            </div>
            </div>
            
        </footer>

        <style jsx global>{`
            footer {
                height: 100%;
            }
            ul li .s-icon img {
                width: 35px;
                height: 35px;
                opacity: 0.6;
            }
            ul li .s-icon img:hover {
                opacity: 1;
            }
            .fl:hover {
                opacity: 0.6;
            }
            .add-icon {
                margin-right: 15px;
            }
            .add-icon i {
                font-size: 24px;
                color: #fff;
            }
            .s-icon {
                margin-right: 20px;
            }
            .s-image {
                width: 50px;
                height: 50px;
            }
            .logo-link {
                background: url("/images/flyz-logo-white.svg") no-repeat;
                background-size: contain;
                width: 250px;
                height: 55px;
                display: flex;
            }

            @media only screen and (max-width: 1223px) {
                .logo-link {
                    width: 180px;
                    height: 50px;
                }
                
            }
        `}</style>
        </>
        )
    }
}