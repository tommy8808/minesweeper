import React from 'react';
import HeadLine from './HeadLine';
import MidLine from './MidLine';

class Minesweeper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {x: this.props.xSize, y: this.props.ySize};

        this.ibxSize = React.createRef();

        

        

        //this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount = () => {
        this.ibxSize.current.value = this.props.xSize;
    }

    Banner() {
        let banner = [];
        banner.push(<div className="banner" style={{width:24*this.state.x, height:48}}>유쾌한 지뢰찾기</div>);
        return banner;
    };

    // MidLine() {
    //     let midLine = [];
    //     let mineArea = [];

    //     for(let i=0; i<this.state.x; i++){
    //         for(let j=0; j<this.state.y; j++){
    //             //rowOfPlate.push(<img src={closed} className="Minesweeper" alt="closed" />)
    //             mineArea.push(<div key={i+"_"+j} className="cell hd_closed" style={{width:24, height:24}}/>)
    //         }
    //     }
    //     midLine.push(<div key="m1" className="hd_wrapper-border-vert" style={{width:18, height:24*this.state.y}} />);
    //     midLine.push(<div key="m2" className="mineArea" style={{ width:24*this.state.x, height:24*this.state.y}}>{mineArea}</div>)

    //     midLine.push(<div key="m3" className="hd_wrapper-border-vert" style={{width:18, height:24*this.state.y}} />);

    //     return midLine;

    // }



    FooterLine() {
        let footerLine = [];

        footerLine.push(<div key="f1" className="hd_wrapper-border-left-bottom" style={{width:18, height:16.5}}></div>);
        footerLine.push(<div key="f2" className="hd_wrapper-border-hor" style={{width:24*this.state.x, height:16.5}}></div>);
        footerLine.push(<div key="f3" className="hd_wrapper-border-right-bottom" style={{width:18, height:16.5}}></div>);

        return footerLine;

    }

    

    Plate = () => {

        let plate = [];

        plate.push(this.Banner(this.state.x, this.state.y));
        //plate.push(this.HeadLine(this.state.x, this.state.y));
        plate.push(<HeadLine key="hl" x={this.state.x} y={this.state.y}/>);
        //plate.push(<div key="p1" style={{height:24*this.state.x}}>{this.MidLine(this.state.x, this.state.y)}</div>);
        plate.push(<div key="p1" style={{height:24*this.state.x}}><MidLine key="ml" x={this.state.x} y={this.state.y}/></div>);
        plate.push(<div key="p2" style={{height:16.5}}>{this.FooterLine(this.state.x, this.state.y)}</div>)
        
        return plate;
    }

    handleChange = (event) => {
        this.setState({x: event.target.value, y: event.target.value});
    }

    handleClick = (e) => {
        e.preventDefault();
        if (!this.ibxSize.current.value) {
          return;
        }

        this.setState({x: this.ibxSize.current.value, y: this.ibxSize.current.value});
        
    }

    

    render() {
        return (
            <React.Fragment>
                <div key="p3" >{this.Plate()}</div>
                <input ref={this.ibxSize} type="text"></input>
                <button onClick={this.handleClick}>크기변경</button>
                
            </React.Fragment>
            
        )
    };
}

export default Minesweeper