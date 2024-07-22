import React from "react";
import Countries from "../countries.json";

export default class Popup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //FullName
        if(!fields["fullname"]){
            formIsValid = false;
            errors["fullname"] = "Fullname Field is cannot be empty";
        }
        if(typeof fields["fullname"] !== "undefined"){
            if(!fields["fullname"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["fullname"] = "This field only accept letter";
            }
        }
        //Organisation
        if(!fields["organisation"]){
            formIsValid = false;
            errors["organisation"] = "Organisation Field is cannot be empty";
        }
        if(typeof fields["organisation"] !== "undefined"){
            if(!fields["organisation"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["organisation"] = "This field only accept letter";
            }
        }

        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Email Field is cannot be empty";
        }
        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
            if(!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid it's required to '@''.'"
            }
        }
        //Mobile
        if(!fields["mobile"]){
            formIsValid = false;
            errors["mobile"] = "Mobile Field is cannot be empty";
        }
        if(typeof fields["mobile"] !== "undefined"){
            if(!fields["mobile"].match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
                formIsValid = false;
                errors["mobile"] = "This field only accept numbers.";
            }
    }
        
        //message
        if(!fields["messages"]){
            formIsValid = false;
            errors["messages"] = "Messages field is cannot be empty";
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(e){
        
        if(this.handleValidation()){
            alert("Form Submited Successfull");
            
        }else{
            console.log(e.preventDefault());
            
        }
        console.log(this.state.fields);
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return (
        <>
        <section className="bgcBlack">
            <div className="popupBox df fdc">
                <button className="closeBtn" onClick={this.props.onClose}><div className="closeImg"></div></button>
                <h1 className="tac fs24 mfs18 mb20 mw50 lh1">For your valuable queries</h1>
                <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="df mb10 mfdc">
                        <div className="df fdc mmb10">
                            <input type="text" placeholder="Full Name" name="fullname" className="textbox" onChange={this.handleChange.bind(this, "fullname")} value={this.state.fields["fullname"]} />
                            <span style={{color: "red"}} className="fs14">{this.state.errors["fullname"]}</span>
                        </div>
                        <div className="df fdc ml20 mml0">
                            <input type="text" placeholder="Organisation Name" name="organisation" className="textbox" onChange={this.handleChange.bind(this, "organisation")} value={this.state.fields["organisation"]} />
                            <span style={{color: "red"}} className="fs14">{this.state.errors["organisation"]}</span>
                        </div>
                    </div>
                    <div className="df mb10 mfdc">
                        <div className="df fdc mmb10">
                            <input type="email" placeholder="Email" name="email" className="textbox" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                            <span style={{color: "red"}} className="fs14">{this.state.errors["email"]}</span>
                        </div>
                        <div className="df fdc ml20 mml0">
                            <input type="tel" placeholder="Mobile Number" name="mobile" className="textbox" onChange={this.handleChange.bind(this, "mobile")} value={this.state.fields["mobile"]} />
                            <span style={{color: "red"}} className="fs14">{this.state.errors["mobile"]}</span>
                        </div>
                    </div>
                    <div className="df mb10 mfdc">
                        <div className="df fdc mmb10">
                            <select className="textbox" name="country" onChange={this.handleChange.bind(this, "country")} value={this.state.fields["country"]} >
                                <option>Select Country</option>
                                {Countries.map((data, i) => {
                                return (
                                <option key={i}>{data.name}</option>
                                )
                            })}
                            </select>
                            <span style={{color: "red"}} className="fs14">{this.state.errors["country"]}</span>
                        </div>
                        <div className="df fdc ml20 mml0">
                            <select className="textbox" name="services" onChange={this.handleChange.bind(this, "services")} value={this.state.fields["services"]}>
                                <option className="clg o6">Select Services</option>
                                <option>Overseas Education</option>
                                <option>Mobility Services</option>
                                <option>Staffing Services</option>
                                <option>Travels Services</option>

                            </select>
                            <span style={{color: "red"}} className="fs14">{this.state.errors["services"]}</span>
                        </div>
                    </div>
                    <div className="df fdc mb10">
                        <textarea placeholder="Messages" name="messages" className="textbox messageBox" onChange={this.handleChange.bind(this, "messages")} value={this.state.fields["messages"]} />
                        <span style={{color: "red"}} className="fs14">{this.state.errors["messages"]}</span>
                    </div>
                    <div className="submitBtn">
                        <button type="submit" name="send" className="primary-btn m0a">Send</button>
                    </div>
                </form>
            </div>
        </section>
        <style jsx global>{`
            .bgcBlack {
                background: rgb(000,000,000,0.7);
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 1000;
            }
            .popupBox {
                background-color: #fad4d9;
                padding: 20px;
                border-radius:20px;
                max-width: 900px;
                min-height: 500px;
                align-items: center;
                justify-content: space-around;
                position: fixed;
                top: 50%;
                left: 50%;
                width: 100%;
                transform: translate(-50%, -50%);
            }
            .closeBtn {
                background: none;
                width: 25px;
                height: 25px;
                border: none;
                position: absolute;
                top: 25px;
                right: 25px;
                cursor: pointer;
            }
            .closeBtn:hover .fas {
                color: red;
            }
            .closeBtn i {
                font-size: 1.5rem;
                color: #33333;
            }
            .textbox {
                padding: 10px;
                width: 240px;
                font-size: 16px;
                border: 1px solid #424242;
                border-radius: 5px;
            }
            .messageBox {
                width: 100%;
                max-width: 500px;
            }
            .primary-btn {
                cursor: pointer;
                background-color: #ea2d47;
                color: #fff;
                border: none;
                border-radius: 50px;
                width: 230px;
                height: 45px;
                text-align: center;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .closeImg {
                background:url("/images/close.svg")no-repeat;
                background-size: contain;
                width: 30px;
                height: 30px;
            }
            @media only screen and (max-width: 1223px) {
                .closeImg {
                    width: 15px;
                    height: 15px;
                }
                .popupBox {
                    background: #eee;
                    padding: 10px;
                    border-radius: 10px;
                    width: 97%;
                    height: 100%;
                }
                .textbox {
                    padding: 5px;
                    width: 100%;
                    font-size: 14px;
                    max-width: 250px;
                }
                .primary-btn {
                    width: 210px;
                    height: 30px;
                    font-size: 16px;
                }

            }
        `}</style>
        </>
        )
    }
}