import React from "react";

export default class CareerOverview extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const jobOpening = [
            {path:"#",role:"FrontEnd Developer",location:"London",time:"Full Time"},
        ]
        return(
            <>
            <section>
                <div className="container">
                    <div className="careerHead">
                        <p className="fs18 role">Job Title</p>
                        <p className="fs18 time">Job Type</p>
                        <p className="fs18 locations">Location</p>
                    </div>
                    {jobOpening.map((job,i) => {
                        return (
                    <div className="careersList" key={i}>
                        <p className="fs18 role mfs16 mtac">{job.role}</p>
                        <p className="fs18 time mfs16">{job.time}</p>
                        <p className="fs18 location mfs16">{job.location}</p>
                        <a href={job.path} className="jobApplyBtn">Apply Now</a>
                    </div>
                     )
                    })}
                </div>
            </section>

            <style jsx>{`
                .careerHead {
                    padding: 15px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    text-align: left;
                    width: 89%;
                }
                .careersList {
                    padding: 15px 20px;
                    background: #eee;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    text-align: left;
                    width: 100%;
                }
                .role {
                    width: 40%;
                }
                .locations {
                    width: 25%;
                }
                .location, .time {
                    width: 20%;
                    text-align: left;
                }
                .jobApplyBtn {
                    padding: 8px 20px;
                    background: #ea2d47;
                    color: #fff;
                    border-radius: 50px;
                    text-decoration: none;
                    font-size: 18px;
                }
                .jobApplyBtn:hover {
                    box-shadow: 1px 5px 5px rgba(87, 85, 85, 0.5);
                }

                @media only screen and (max-width: 1023px) {
                    .careersList {
                        flex-direction: column;
                    }
                    .role {
                        width: 100%;
                        margin-bottom: 20px;
                    }
                    .location, .time {
                        width: 100%;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .jobApplyBtn {
                        padding: 10px;
                        font-size: 16px;
                        max-width: 250px;
                        margin:0 auto;
                        width: 100%;
                        text-align: center;
                    }
                    .careerHead {
                        display: none;
                    }
                }
            `}</style>

            </>
        )
    }
}