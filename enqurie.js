import React from "react";
import Popup from "../components/popup";

export default class Enqurie extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            popupShow: false
        }
    }

    handleClick(){
        this.setState(e => ({
            popupShow: !e.popupShow
        }));
    }
    handleClose(){
        this.setState(e => ({
            popupShow: false
        }));
    }
    render(){
        return(
            <>
            <div className="enqurieSec" onClick={this.handleClick.bind(this)}>
                <p className="cw fs18 mfs14 ls025 lnh11">Enquiry Form</p>
            </div>
            {this.state.popupShow ?
            <Popup onClose={this.handleClose.bind(this)} />
            : null}
            <style jsx global>{`
                .enqurieSec{
                    background: #8e1cf6;
                    position: fixed;
                    top: 45%;
                    left: 0;
                    padding: 16px  8px;
                    z-index: 10;
                    writing-mode: vertical-lr;
                    border-radius:0 7px 7px 0;
                    cursor: pointer;
                }
                .enqurieSec:hover{
                    box-shadow: 2px 2px 10px rgb(000,000,000,0.5);
                }
            `}</style>
            </>
        )
    }
}