import React from "react";

export default class CareerPrevOne extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const jobDescription = [
            {role:"Senior Dynamics CRM Developer",hours:"9am - 5pm",time:"Full Time",description:"Eu et amet est esse et. Fugiat ullamco dolore excepteur deserunt culpa cillum dolor ea veniam sunt esse enim amet. Veniam excepteur eiusmod incididunt eiusmod proident in aliqua tempor. Sit ad aliquip nisi deserunt deserunt ut aute. Aliquip magna duis pariatur nostrud. Qui Lorem ullamco aliqua reprehenderit est officia ex in veniam ea sint Lorem. Aliquip do ullamco ipsum aliqua anim voluptate Lorem aute anim esse culpa."},
        ]
        return(
            <>
            <section>
                <div className="container pdt140">
                    {jobDescription.map((job) => {
                        return (
                    <div className="jobDescrip">
                        <h1 className="fs42 fw6 mb20 role mfs20">{job.role}</h1>
                        <div className="df mb40">
                            <p className="fs18 fw6 time mfs16">{job.time}</p>
                            <p className="fs18 fw6 hours ml20 mfs16">{job.hours}</p>
                        </div>
                        <h2 className="fs24 fw6 mb20 mfs18">Job Description</h2>
                        <p className="fs18 descriptio mfs16">{job.description}</p>
                        
                    </div>
                     )
                    })}
                </div>
            </section>

            <style jsx>{`

                @media only screen and (max-width: 1023px) {
                }
            `}</style>

            </>
        )
    }
}