import React from "react";

export default class Contact extends React.Component {
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
            <section className="bgc-sa2">
                <div className="container df fdc fac fjc  pdtb60">
                    <p className="fs28 fw6 clr mb40 tac">For Queries</p>
                    <form method="POST" className="df fdc fjc w100" onSubmit={this.contactSubmit.bind(this)}>
                        <div className="df mfdc">
                            <div className="df fdc w100">
                                <span style={{color: "red"}} className="fs14">{this.state.errors["name"]}</span>
                                <input type="text" name="name" placeholder="Name*" className="field" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                            </div>
                            <div className="df fdc ml20 mml0 w100">
                                <span style={{color: "red"}} className="fs14">{this.state.errors["email"]}</span>
                                <input type="text" name="email" placeholder="Email Address*" className="field" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                            </div>
                        </div>
                        <div className="df fdc">
                            <span style={{color: "red"}} className="fs14">{this.state.errors["message"]}</span>
                            <textarea type="text" name="message" placeholder="Your Queries" className="field" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}></textarea>
                        </div>
                        <button type="submit" className="submit-button button bgc-lr">Submit</button>
                    </form>
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
                    border-radius: 5px;
                }
                textarea.field {
                    min-height: 180px;
                }
                .button {
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 1.3rem;
                    font-weight: 500;
                    padding: 10px;
                    min-width: 200px;
                    cursor: pointer;
                    margin: 0 auto;
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
                    margin: 0 auto;
                    margin-bottom: 15px;
                }
                span {
                    margin: 0 auto;
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