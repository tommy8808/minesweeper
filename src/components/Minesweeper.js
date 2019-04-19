import React from 'react';

class Minesweeper extends React.Component {
    constructor(props) {
        super(props);

        this.state ={x: this.props.xSize, y: this.props.ySize};

        //this.handleChange = this.handleChange.bind(this);

    }

    Banner() {
        let banner = [];
        banner.push(<div className="banner" style={{width:24*this.state.x, height:48}}>유쾌한 지뢰찾기</div>);
        return banner;
    };

    HeadLine() {
        let headLine = [];
        let headLineTop = [];
        let headLineMid = [];
        let headLineBot = [];

        let displayArea = [];
        let leftPanel = [];
        let leftInsidePanel = [];
        let rightPanel = [];
        let rightInsidePanel = [];
        let centerPanel = [];

        headLineTop.push(<div key="ht1" className="hd_wrapper-border-left-top" style={{width:18, height:16.5}}></div>);
        headLineTop.push(<div key="ht2" className="hd_wrapper-border-hor" style={{width:24*this.state.x, height:16.5}}></div>);
        headLineTop.push(<div key="ht3" className="hd_wrapper-border-right-top" style={{width:18, height:16.5}}></div>);

        headLine.push(<div key="h1" style={{height:16.5}}>{headLineTop}</div>)

        headLineMid.push(<div key="hm1" className="hd_wrapper-border-vert" style={{width:18, height:48}}></div>);

        displayArea.push(<div key="d1" style={{width:24*this.state.x , height:4.5}}></div>);
        displayArea.push(<div key="d2" className="pull-left" style={{width:4.5 , height:31.5}}></div>);

        leftPanel.push(<div key="l1" className="" style={{width:61.5, height:3}}></div>);

        leftInsidePanel.push(<div key="li1" className="pull-left" style={{width:3, height:31.5}}></div>);
        leftInsidePanel.push(<div key="li2" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>);
        leftInsidePanel.push(<div key="li3" className="pull-left" style={{width:3, height:31.5}}></div>);
        leftInsidePanel.push(<div key="li4" className="hd_top-area-num1 pull-left" style={{width:16.5, height:31.5}}></div>);
        leftInsidePanel.push(<div key="li5" className="pull-left" style={{width:3, height:31.5}}></div>);
        leftInsidePanel.push(<div key="li6"className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>);

        leftPanel.push(<div key="l2" className="" style={{width:61.5, height:31.5}}>{leftInsidePanel}</div>);
        
        displayArea.push(<div key="d3" className="hd_numbers-panel pull-left" style={{width:61.5, height:37.5}}>{leftPanel}</div>);

        rightPanel.push(<div key="r1" className="" style={{width:61.5, height:3}}></div>);

        rightInsidePanel.push(<div key="ri1" className="pull-left" style={{width:3, height:31.5}}></div>);
        rightInsidePanel.push(<div key="ri2" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>);
        rightInsidePanel.push(<div key="ri3" className="pull-left" style={{width:3, height:31.5}}></div>);
        rightInsidePanel.push(<div key="ri4" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>);
        rightInsidePanel.push(<div key="ri5" className="pull-left" style={{width:3, height:31.5}}></div>);
        rightInsidePanel.push(<div key="ri6" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>);

        rightPanel.push(<div key="r2" className="" style={{width:61.5, height:31.5}}>{rightInsidePanel}</div>);

        displayArea.push(<div key="d4" className="hd_numbers-panel pull-right" style={{width:61.5, height:37.5}}>{rightPanel}</div>);

        displayArea.push(<div key="d5" className="pull-right" style={{width:4.5 , height:31.5}}></div>);

        centerPanel.push( <div key="c1" className="top-area-face hd_top-area-face-unpressed" style={{width:39, height:39}}></div>);

        displayArea.push(<div key="d6" className="top-area-center">{centerPanel}</div>);

        headLineMid.push(<div key="hm2" className="top-area" style={{width:24*this.state.x, height:48}}>{displayArea}</div>);
        headLineMid.push(<div key="hm3" className="hd_wrapper-border-vert" style={{width:18, height:48}}></div>);

        headLine.push(<div key="h2" style={{height:48}}>{headLineMid}</div>);

        headLineBot.push(<div key="hb1" className="hd_wrapper-border-t-left" style={{width:18, height:16.5}}></div>);
        headLineBot.push(<div key="hb2" className="hd_wrapper-border-hor" style={{width:24*this.state.x, height:16.5}}></div>);
        headLineBot.push(<div key="hb3" className="hd_wrapper-border-t-right" style={{width:18, height:16.5}}></div>);

        headLine.push(<div key="h3" style={{height:16.5}}>{headLineBot}</div>)

        return headLine;

    }

    MidLine() {
        let midLine = [];
        let mineArea = [];

        for(let i=0; i<this.state.x; i++){
            for(let j=0; j<this.state.y; j++){
                //rowOfPlate.push(<img src={closed} className="Minesweeper" alt="closed" />)
                mineArea.push(<div key={i+"_"+j} className="cell hd_closed" style={{width:24, height:24}}/>)
            }
        }
        midLine.push(<div key="m1" className="hd_wrapper-border-vert" style={{width:18, height:24*this.state.y}} />);
        midLine.push(<div key="m2" className="mineArea" style={{ width:24*this.state.x, height:24*this.state.y}}>{mineArea}</div>)

        midLine.push(<div key="m3" className="hd_wrapper-border-vert" style={{width:18, height:24*this.state.y}} />);

        return midLine;

    }

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
        plate.push(this.HeadLine(this.state.x, this.state.y));
        plate.push(<div key="p1" style={{height:24*this.state.x}}>{this.MidLine(this.state.x, this.state.y)}</div>);
        plate.push(<div key="p2" style={{height:16.5}}>{this.FooterLine(this.state.x, this.state.y)}</div>)
        
        return plate;
    }

    handleChange = (event) => {
        this.setState({x: event.target.value, y: event.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <div key="p3" >{this.Plate()}</div>
                <input type="text" value={this.state.x}  onChange={this.handleChange}></input>
                
            </React.Fragment>
            
        )
    };
}

export default Minesweeper