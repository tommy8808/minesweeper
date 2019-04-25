import React from 'react';

class FooterLine extends React.Component {

    render() {
        return (
            <div key="p2" style={{height:16.5}}>
                <div key="f1" className="hd_wrapper-border-left-bottom" style={{width:18, height:16.5}}></div>
                <div key="f2" className="hd_wrapper-border-hor" style={{width:24*this.props.x, height:16.5}}></div>
                <div key="f3" className="hd_wrapper-border-right-bottom" style={{width:18, height:16.5}}></div>
            </div>
        )
    }

}

export default FooterLine