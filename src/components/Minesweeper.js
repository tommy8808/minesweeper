import React from 'react';
import Plate from './Plate';

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
                <Plate x={this.state.x} y={this.state.y}></Plate>
                <input ref={this.ibxSize} type="text"></input>
                <button onClick={this.handleClick}>크기변경</button>
                
            </React.Fragment>
            
        )
    };
}

export default Minesweeper