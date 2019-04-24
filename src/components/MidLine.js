import React from 'react';

class MidLine extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    mineArea() {
        let mineArea = [];
        for(let i=0; i<this.props.x; i++){
            for(let j=0; j<this.props.y; j++){
                //rowOfPlate.push(<img src={closed} className="Minesweeper" alt="closed" />)
                mineArea.push(<div key={i+"_"+j} className="cell hd_closed" style={{width:24, height:24}}/>)
            }
        }

        return mineArea;
    }

    render() {
        return (
            <React.Fragment>
                <div key="m1" className="hd_wrapper-border-vert" style={{width:18, height:24*this.props.y}} />
                <div key="m2" className="mineArea" style={{ width:24*this.props.x, height:24*this.props.y}}>{this.mineArea()}</div>
                <div key="m3" className="hd_wrapper-border-vert" style={{width:18, height:24*this.props.y}} />
            </React.Fragment>
        )
    }

    
}

export default MidLine 