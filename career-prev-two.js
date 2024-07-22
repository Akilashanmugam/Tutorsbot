import React from "react";

export default class CareerPrevTwo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const jobView = [
            {title:"Qualification",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"Other Benefits",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
            {title:"",content:"Experience in CRM in 2 or 3 years with Bachelor degree."},
    ]
        return(
            <>
            <section>
                <div className="container">
                    {jobView.map((job) => {
                        return (
                    <div className="jobView">
                        <h2 className="fs24 fw6 mb20 mfs18">{job.title}</h2>
                        <div className="df fac mb20 ml20 mml0">
                            <div className="bulet"></div>
                            <p className="fs18 w100 mfs16">{job.content}</p>
                        </div>
                    </div>
                     )
                    })}
                    <div className="throughBtn df fac">
                        <a href="#" className="jobApplyBtn">Apply</a>
                        <a href="#" className="jobApplyBtn emailBtn ml20">Email Job</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                    .throughBtn {
                        margin-top: 40px;
                        margin-bottom: 40px;
                    }
                    .bulet {
                        background: #ea2d47;
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                    .jobApplyBtn {
                        padding: 10px 20px;
                        background:#ea2d47;
                        color: #fff;
                        border-radius: 50px;
                        text-decoration: none;
                        font-size: 18px;
                        width: 150px;
                        display: flex;
                        justify-content: center;
                        text-align: center;
                    }
                    .emailBtn {
                        border: 3px solid #ea2d47;
                        background: none;
                        color: #ea2d47;
                    }
                    .jobApplyBtn:hover {
                        box-shadow: 1px 1px 5px rgb(000, 000,000,0.5);
                    }
                @media only screen and (max-width: 1023px) {
                    .jobApplyBtn {
                        padding: 10px;
                        font-size: 16px;
                        text-align: center;
                    }
                    .bulet {
                        width: 12px;
                        height: 12px;
                    }
                }
            `}</style>

            </>
        )
    }
}