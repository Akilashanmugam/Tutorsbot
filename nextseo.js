import React from "react";
import { CorporateContactJsonLd, LocalBusinessJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";

export default class NextSeoModule extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <>
            <NextSeo
                title={this.props.title}
                description={this.props.description}
                openGraph={{
                    type: 'website',
                    url: `https://www.flyzglobal.com/${this.props.url}`,
                    title: `${this.props.title}`,
                    description: `${this.props.description}`,
                    images: [
                        {
                            url: 'https://www.flyzglobal.com/images/flyz-logo.png',
                            width: 400,
                            height: 600,
                            alt: 'Flyz Global',
                        }
                    ]
                }}
            />
            <CorporateContactJsonLd
                url="http://www.flyzglobal.com"
                logo="https://www.flyzglobal.com/images/flyz-logo.png"
                contactPoint={[
                    {
                        telephone: '+917825888899',
                        contactType: 'customer service',
                        areaServed: 'IN',
                    }
                ]}
            />
            <SocialProfileJsonLd
                type="organization"
                name="Flyz Global"
                url="http://www.flyzglobal.com"
                sameAs={[
                    'https://www.facebook.com',
                    'https://twitter.com',
                    'https://www.linkedin.com',
                    'https://www.instagram.com'
                    
                ]}
            />
            <LocalBusinessJsonLd
                type="Store"
                name="Flyz Global"
                description={this.props.description}
                url="http://www.flyzglobal.com"
                telephone="+917825888899"
                address={{
                    streetAddress: 'G10 Sundari Complex, No:25 Nangunari Road',
                    addressLocality: 'Tirunelveli',
                    addressRegion: 'Tamil Nadu',
                    postalCode: '627 005',
                    addressCountry: 'INDIA',
                }}
                geo={{
                    latitude: '8.6993014',
                    longitude: '77.7246567',
                }}
                images={[
                    'https://www.flyzglobal.com/images/flyz-logo.png'
                ]}
                openingHours={[
                    {
                        opens: '08:30',
                        closes: '23:50',
                        dayOfWeek: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                        ]
                    }
                ]}
            />
            </>
        )
    }
}