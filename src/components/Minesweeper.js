import React from 'react';
import Plate from './Plate';

class Minesweeper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {x: this.props.xSize, y: this.props.ySize, lv: 1};

        this.ibxSize = React.createRef();

        //this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount = () => {
        this.ibxSize.current.value = this.props.xSize;
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

    changeLevel1 = () => {
        this.setState({x: 9, y: 9, lv: 1});
        this.ibxSize.current.value = 9;
    }

    changeLevel2 = () => {
        this.setState({x: 16, y: 16, lv: 2});
        this.ibxSize.current.value = 16;
    }

    changeLevel3 = () => {
        this.setState({x: 30, y: 16, lv: 3});
        this.ibxSize.current.value = 30;
    }

    render() {
        return (
            <React.Fragment>
                <Plate x={this.state.x} y={this.state.y} lv={this.state.lv}></Plate>
                <button onClick={this.changeLevel1}>초급</button>
                <button onClick={this.changeLevel2}>중급</button>
                <button onClick={this.changeLevel3}>고급</button>
                <input ref={this.ibxSize} type="text"></input>
                <button onClick={this.handleClick}>크기변경</button>
                
            </React.Fragment>
            
        )
    };
}

export default Minesweeper