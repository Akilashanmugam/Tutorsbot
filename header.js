import Link from "next/link";
import React from "react";

const timeoutLength = 5000;

export default class Navbar extends React.Component {
    state = {
        isActive: "home",
        showMenu: false,
        hoverMenu: false,
        accordMenu: false
    }

    activeClass(a,e) {
        const tempstate = this.state;
        tempstate.isActive = a;
        this.setState({state: tempstate});
    }
    showMenu () {
        this.setState(toggle => ({
            showMenu: !toggle.showMenu
        }));
    }
    componentDidMount() {
        console.log(this.props.active);
        this.setState({
            isActive: this.props.active
        })
    }
    hoverMenu() {
        this.setState(toggle => ({
            hoverMenu: !toggle.hoverMenu
        }));
    }
    hoverMenuLeave() {
        setTimeout(() => {
            this.setState({ hoverMenu: false});
        }, timeoutLength);
    }
    accordOnClick() {
        this.setState(t => ({accordMenu: !t.accordMenu}));
    }
    render() {
        return (
            <>
            <header>
                <div className="container df fac fjsb mfdc mfafs">
                    <div className="logo-grp df fjsb fac mh100 mw100">
                    <Link href="/" ><div className="logo-link"></div></Link>

                        <div className={`humburger-menu dn mdf fdc ${this.state.showMenu === true ? 'closeBtn':''}`} onClick={this.showMenu.bind(this)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                    <div className="navlink-grp df fac mdf mfdc mdn">
                        <Link href="/" className={`nav-link clr fs18 ${this.state.isActive === 'home' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"home")}>Home</Link>
                        <div className="pr">
                            <Link href="/services" className={`nav-link clr fs18 ml20 mml0 ${this.state.isActive === 'services' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"services")} onMouseEnter={this.hoverMenu.bind(this)} >Services</Link>
                        
                        {this.state.hoverMenu ?
                        <div className="servSubmenu">
                            <Link href={"/services/overseas-education"}><p>Overseas Education</p></Link>
                            <Link href={"/services/mobility-services"}><p>Mobility</p></Link>
                            <Link href={"/services/staffing-services"}><p>Staffing</p></Link>
                            <Link href={"/services/travels-services"}><p>Travels</p></Link>
                        </div> : null }
                        </div>
                        <Link href="/careers" className={`nav-link clr fs18 ml20 mml0 ${this.state.isActive === 'careers' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"careers")}>Careers</Link>
                        <Link href="/about" className={`nav-link clr fs18 ml20 mml0 ${this.state.isActive === 'about' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"about")}>About us</Link>
                        <Link href="/contact-us" className="nav-btn btn-first bgc-lr cw ml20 mml0 btn">CONTACT US</Link>
                    </div>
                    {this.state.showMenu ? 
                    <div className="navlink-grp dn mdf mfdc">
                        <Link href="/" className={`nav-link clr fs18 mmb10 ${this.state.isActive === 'home' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"home")}>Home</Link>
                        <div className="df fac fjsb nav-link mmb10" onClick={this.accordOnClick.bind(this)}>
                            <Link href="/services" className={`nav-link clr fs18 ml20 mml0 ${this.state.isActive === 'services' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"services")}>Services</Link>
                            <div className={`${this.state.accordMenu === true ? 'plusIconAct':'plusIcon'}`}></div>
                        </div>
                        {this.state.accordMenu ?
                        <div className="dropdown">
                            <Link className="link" href="/services/overseas-education"><p className="clr">Overseas Education</p></Link>
                            <Link className="link" href="/services/mobility-services"><p>Mobility</p></Link>
                            <Link className="link" href="/services/staffing-services"><p>Staffing</p></Link>
                            <Link className="link" href="/services/travels-services"><p>Travels</p></Link>
                        </div> : null}
                        <Link href="/careers" className={`nav-link clr fs18 mmb10 ${this.state.isActive === 'careers' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"careers")}>Careers</Link>
                        <Link href="/about" className={`nav-link clr fs18 mmb10 ${this.state.isActive === 'about' ? 'navActive' : ''}`} onClick={this.activeClass.bind(this,"about")}>About Us</Link>
                        <Link href="/contact-us" className="nav-link clr fs18 mmb10">Contact Us</Link>
                    </div> : null }
                </div>
            </header>
            <style jsx>{`
                header {
                    background-color: #fff;
                    height: 100px;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    border-bottom:1px solid #eee;
                }
                .logo-link {
                    background: url("/images/flyz-logo.svg") no-repeat;
                    background-size: contain;
                    width: 250px;
                    height: 55px;
                    display: flex;
                }
                .btn-first {
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 50px;
                    display: inline-block;
                }
                .nav-link.navActive {
                    color: black;
                }
                .nav-link:hover {
                    color: black;
                }
                .servSubmenu {
                    position: absolute;
                    top: 50px;
                    left: -50px;
                    background: transparent;
                    box-shadow: 1px 1px 10px rgb(000, 000,00,0.5);
                    transition: all .3s ease-in;
                    border-left: 5px solid #ed6161;
                }
                .servSubmenu p {
                    min-width: 300px;
                    width: 100%;
                    background: #fff;
                }
                .servSubmenu p{
                    color: #000;
                    font-size: 16px;
                    padding: 8px;
                    height: 100%;
                    width: 100%;
                    display: inline-block;
                }
                .servSubmenu p:hover {
                    background: #ed6161;
                    color: #fff;
                    transition: all .3s ease-in;
                }
                @media only screen and (max-width: 1223px) {
                .humburger-menu {
                    padding-top: 10px;
                }
                .humburger-menu span {
                    width: 40px;
                    height: 4px;
                    background-color: #000;
                    margin-bottom: 5px;
                }
                .closeBtn span:last-child {
                    transform: rotate(49deg);
                    position: relative;
                    bottom: 3px;
                    margin-bottom: 0;
                }
                .closeBtn span:nth-child(2) {
                    display: none;
                    margin-bottom: 0;
                }
                .closeBtn span:first-child {
                    transform: rotate(-48deg);
                    margin-bottom: 0;
                }
                .navlink-grp {
                    height: 100vh;
                    background: #fff;
                    width: 100%;
                    position: absolute;
                    top: 100px;
                    left: 0;
                    border-top: 1px solid #ddd;
                    padding: 20px;
                }
                .dropdown {
                    padding-left: 15px;
                    background: ##ed6161;
                    transition: all 3s ease-in-out;
                }
                
                .dropdown p {
                    padding: 10px 0;
                    color: #ea2d47;
                }
             
                .plusIcon {
                    background: url("/images/down-chevron.svg") no-repeat;
                    background-size: contain;
                    width: 15px;
                    height: 15px;
                }
                .plusIconAct {
                    background: url("/images/right-chevron.svg") no-repeat;
                    background-size: contain;
                    width: 15px;
                    height: 15px;
                }
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