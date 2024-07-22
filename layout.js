import Header from './header';
import Footer from './footer';
import React from 'react';
import Enqurie from './enqurie';


class Layout extends React.Component{
  render(){
    return(
        <>
        <Header active={this.props.activeNav} />
        {/* <Enqurie/> */}
        {this.props.children}
        <Footer/>
        </>
    );
  }
}

export default Layout;
