import React from "react";

export default class ContactOld extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields:{},
            errors:{}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Name field is required*";
        }

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Email field is required*";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if(!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        //Message
        if(!fields["message"]){
            formIsValid = false;
            errors["message"] = "Message field is required*";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
            console.log("Form Submit Successfully");
        } else{
            console.log("Form Submit UnSccessfully");
        }
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return (
            <>
            <section className="bgc-cont">
                <div className="container df pdtb40 mfdc">
                    <div className="w50 mw100 mmb20">
                        <p className="fs32 fw3 mb20">Get in Touch</p>
                        <div className="df fac mb20">
                            <a href="#" className="s-icon"><img src="/images/Facebook.svg" className="s-image" /></a>
                            <a href="#" className="s-icon"><img src="/images/Instagram.svg" className="s-image" /></a>
                            <a href="#" className="s-icon"><img src="/images/Twitter.svg" className="s-image" /></a>
                        </div>
                        <p className="fs18 mfs16">Culpa consequat enim in nisi commodo sunt est ut. Consequat mollit qui commodo voluptate officia non Lorem esse dolor ea occaecat amet commodo minim. Id commodo velit voluptate reprehenderit ullamco excepteur veniam ad anim aliquip pariatur culpa consequat veniam. Minim in sunt ea adipisicing veniam officia aliquip officia ut ut in magna sit esse. Nostrud sit laborum aliquip sunt et nisi consequat quis dolor. Consequat ut excepteur culpa exercitation laboris culpa culpa id sint laboris pariatur ea. Ex adipisicing pariatur minim ea.</p>
                    </div>
                    <div className="w50 ml40 mw100 mml0">
                        <form method="POST" className="df fdc mfac" onSubmit={this.contactSubmit.bind(this)}>
                            <span style={{color: "red"}} className="fs14">{this.state.errors["name"]}</span>
                            <input type="text" name="name" placeholder="Name*" className="field" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                            <span style={{color: "red"}} className="fs14">{this.state.errors["email"]}</span>
                            <input type="text" name="email" placeholder="Email*" className="field" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                            <span style={{color: "red"}} className="fs14">{this.state.errors["message"]}</span>
                            <textarea type="text" name="message" placeholder="Message" className="field" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}></textarea>
                            <button type="submit" className="submit-button button bgc-lr">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .field {
                    border: 1px solid #207282;
                    padding: 15px;
                    font-size: 1rem;
                    color: #333333;
                    width: 100%;
                    margin-bottom: 25px;
                }
                textarea.field {
                    min-height: 150px;
                }
                .button {
                    border: none;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 1.3rem;
                    font-weight: 500;
                    padding: .5rem;
                    min-width: 250px;
                    max-width: 250px;
                    cursor: pointer;
                }
                .button:hover {
                    box-shadow: 5px 5px 5px rgb(000, 000,00,0.5);
                    transition: all .3s ease-in-out;
                }
                .s-icon {
                    width: 50px;
                    height: 50px;
                    border: 1px solid #ea2d47;
                    border-radius: 50%;
                    background: #ea2d47;
                }
                .s-image {
                    width: 100%;
                    height: 100%;
                }
                @media only screen and (max-width: 1223px) {
                .s-icon {
                    margin-right: 10px;
                }
                .s-image {
                    width: 35px;
                    height: 35px;
                }
                .field {
                    padding: 10px;
                    max-width: 400px;
                }
                .button {
                    min-width: 220px;
                    max-width: 220px;
                    font-size: 16px;
                }
            }
            `}</style>
            </>
        )
    }
}