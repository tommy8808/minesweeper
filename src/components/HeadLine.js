import React from 'react';

class HeadLine extends React.Component {
     constructor(props) {
         super(props);

         this.state = {isClicking: null}

         this.onFaceMouseDown = this.onFaceMouseDown.bind(this);
         this.onFaceMouseUp = this.onFaceMouseUp.bind(this);

     }

    onFaceClick = (e) => {
        
    }

    onFaceMouseDown() {
        this.setState({
            isClicking: true
        });
    }

    onFaceMouseUp() {
        this.setState({
            isClicking: false
        });
    }

    onFaceMouseLeave = () => {
        this.setState({
            isClicking: false
        });
    }



    render() {
        let faceClassName = 'top-area-face hd_top-area-face-';
        if (this.state.isClicking) {
            faceClassName += 'pressed'
        } else {
            faceClassName += 'unpressed'
        }

        return (
            <React.Fragment>
                <div key="h1" style={{height:16.5}}>
                    <div key="ht1" className="hd_wrapper-border-left-top" style={{width:18, height:16.5}} />
                    <div key="ht2" className="hd_wrapper-border-hor" style={{width:24*this.props.x, height:16.5}} />
                    <div key="ht3" className="hd_wrapper-border-right-top" style={{width:18, height:16.5}} />
                </div>
                <div key="h2" style={{height:48}}>
                    <div key="hm1" className="hd_wrapper-border-vert" style={{width:18, height:48}} />
                    <div key="hm2" className="top-area" style={{width:24*this.props.x, height:48}}>
                        <div key="d1" style={{width:24*this.props.x , height:4.5}} />
                        <div key="d2" className="pull-left" style={{width:4.5 , height:31.5}}></div>

                        <div key="d3" className="hd_numbers-panel pull-left" style={{width:61.5, height:37.5}}>
                            <div key="l1" className="" style={{width:61.5, height:3}}></div>
                            <div key="l2" className="" style={{width:61.5, height:31.5}}>
                                <div key="li1" className="pull-left" style={{width:3, height:31.5}}></div>
                                <div key="li2" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>
                                <div key="li3" className="pull-left" style={{width:3, height:31.5}}></div>
                                <div key="li4" className="hd_top-area-num1 pull-left" style={{width:16.5, height:31.5}}></div>
                                <div key="li5" className="pull-left" style={{width:3, height:31.5}}></div>
                                <div key="li6"className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>
                            </div>
                        </div>

                        <div key="d4" className="hd_numbers-panel pull-right" style={{width:61.5, height:37.5}}>
                            <div key="r1" className="" style={{width:61.5, height:3}}></div>
                            <div key="r2" className="" style={{width:61.5, height:31.5}}>
                                <div key="ri1" className="pull-left" style={{width:3, height:31.5}}></div>
                                <div key="ri2" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>
                                <div key="ri3" className="pull-left" style={{width:3, height:31.5}}></div>
                                <div key="ri4" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>
                                <div key="ri5" className="pull-left" style={{width:3, height:31.5}}></div>
                                <div key="ri6" className="hd_top-area-num0 pull-left" style={{width:16.5, height:31.5}}></div>
                            </div>
                        </div>
                        <div key="d5" className="pull-right" style={{width:4.5 , height:31.5}}></div>
                        <div key="d6" className="top-area-center">
                            <div key="c1" className={faceClassName} onMouseDown={this.onFaceMouseDown}
                              onMouseUp={this.onFaceMouseUp} onClick={this.onFaceClick} 
                              onMouseLeave={this.onFaceMouseLeave} style={{width:39, height:39}}></div>
                        </div>
                    </div>
                    <div key="hm3" className="hd_wrapper-border-vert" style={{width:18, height:48}}></div>
                </div>
                <div key="h3" style={{height:16.5}}>
                    <div key="hb1" className="hd_wrapper-border-t-left" style={{width:18, height:16.5}}></div>
                    <div key="hb2" className="hd_wrapper-border-hor" style={{width:24*this.props.x, height:16.5}}></div>
                    <div key="hb3" className="hd_wrapper-border-t-right" style={{width:18, height:16.5}}></div>
                </div>
            </React.Fragment>
        )
    }




}

export default HeadLine