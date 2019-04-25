import React from 'react';
import Banner from './Banner';
import HeadLine from './HeadLine';
import MidLine from './MidLine';
import FooterLine from './FooterLine';

class Plate extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Banner x={this.props.x} />
                <HeadLine key="hl" x={this.props.x} y={this.props.y}/>
                <MidLine key="ml" x={this.props.x} y={this.props.y}/>
                <FooterLine x={this.props.x}/>
            </React.Fragment>
        )
    }
}

export default Plate