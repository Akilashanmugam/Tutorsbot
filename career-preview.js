import React from "react";
import Layout from "../components/layout";
import CareerPrevOne from "../components/career-prev-one";
import CareerPrevTwo from "../components/career-prev-two";
import NextSeoModule from "../components/nextseo";


export default class CareerPreview extends React.Component {
    render(){
        return (
            <>
            <NextSeoModule
                title="Career Preview"
                description=""
                url="/career-preview"
            />
            <Layout activeNav="careers">
                <CareerPrevOne/>
                <CareerPrevTwo/>
                <style jsx global>{`
                 @media only screen and (max-width: 1223px) {
                }
                `}</style>

            </Layout>

            </>
        )
    }
}