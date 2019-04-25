import React from 'react';

class MidLine extends React.Component {
     constructor(props) {
         super(props);

         this.state = {isClicking: null, pressedTile: null, mapArray: []}
         this.onMapMouseDown = this.onMapMouseDown.bind(this);
         this.onMapMouseUp = this.onMapMouseUp.bind(this);
     }

    onMapMouseDown(e) {
        e.preventDefault();
        console.log(e._dispatchInstances.key);
        this.setState({
            pressedTile: e._dispatchInstances.key
        });
    }

    onMapMouseUp(e) {
        e.preventDefault();
        this.setState({
            pressedTile: false
        });
    }

    onMapMouseLeave = (e) => {debugger;
        e.preventDefault();
        this.setState({
            pressedTile: false
        });
    }

    mineArea() {
        let mapClassName = "cell";
        let mineArea = [];
        for(let i=0; i<this.props.x; i++){
            for(let j=0; j<this.props.y; j++){

                if((i+"_"+j) === this.state.pressedTile){
                    mapClassName = "cell hd_pressed"
                }else {
                    mapClassName = "cell hd_closed"
                }
                //rowOfPlate.push(<img src={closed} className="Minesweeper" alt="closed" />)
                mineArea.push(<div key={i+"_"+j} onMouseDown={this.onMapMouseDown} 
                onMouseUp={this.onMapMouseUp} onMouseOut={this.onMapMouseLeave} className={mapClassName} style={{width:24, height:24}}/>)
            }
        }

        return mineArea;
    }

    render() {
        
        return (
            <div key="p1" style={{height:24*this.props.x}}>
                <div key="m1" className="hd_wrapper-border-vert" style={{width:18, height:24*this.props.y}} />
                <div key="m2" className="mineArea" style={{ width:24*this.props.x, height:24*this.props.y}}>{this.mineArea()}</div>
                <div key="m3" className="hd_wrapper-border-vert" style={{width:18, height:24*this.props.y}} />
            </div>
        )
    }

    
}

export default MidLine 