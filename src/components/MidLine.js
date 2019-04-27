import React from 'react';

class MidLine extends React.Component {
     constructor(props) {
         super(props);

         
            
         this.mapArray = [];
         this.state = {isClicking: null, pressedTile: null, mineClicked: false};
         this.onMapMouseDown = this.onMapMouseDown.bind(this);
         this.onMapMouseUp = this.onMapMouseUp.bind(this);
         this.r1_1 = React.createRef();
         for(let i=0; i<this.props.x; i++){
            for(let j=0; j<this.props.y; j++){
               // eval(`this.${i}_${j}`);
            }
         }
     }

     shouldComponentUpdate(nextProps, nextState) {
        if (this.props.x !== nextProps.x) {
          return true;
        }
        if (this.state.pressedTile !== nextState.pressedTile) {
          return true;
        }
        if (this.state.mineClicked !== nextState.mineClicked) {
            return true;
        }
        return false;
      }

    
     
    componentDidMount(){
        let lv = this.props.lv;
        let numberOfMine = (lv === 1 ? 10 : lv === 2 ? 40 : lv === 3? 99 : (this.props.x*this.props.y)/5);
        console.log('DidMount run');
        

        const mapObject = {
            id: '',
            mine: false,
            numberOfMineAround: () => {
                console.log('지뢰갯수표시해드릴꺼에욧..!');
               }
        }

        
        for(let i=0; i<this.props.x; i++){
            for(let j=0; j<this.props.y; j++){
                let foo = this.copyObject(mapObject);
                foo.id = i+"_"+j;

                this.mapArray.push(foo);
            }
         }
         
        for(let i=0; i<numberOfMine; i++){
            let randomId = `${Math.floor(Math.random() * Math.floor(this.props.x))}_${Math.floor(Math.random() 
                * Math.floor(this.props.y))}`;
            let mineMap = this.mapArray.find((item)=>{
                    return item.id === randomId
            });
            !mineMap.mine? mineMap.mine = true : i--

        }
    };

    copyObject(obj) {
        if (obj === null || typeof obj !== 'object') {
          return obj;
        }
      
        const copiedObject = obj.constructor();
      
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            copiedObject[key] = obj[key];
          }
        }
        return copiedObject;
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
        let clickedMap = this.mapArray.find((obj)=>{
            return obj.id === e._dispatchInstances.key;
        });
        if(clickedMap.mine)
        this.setState({
            mineClicked:true
        });
            
        
    }

    onMapMouseLeave = (e) => {
        e.preventDefault();
        this.setState({
            pressedTile: false
        });
    }

    onMapClick = (e) => {
        e.preventDefault();
        
        // if(e.currentTarget.dataset.mine){
        //     console.log(e.currentTarget.dataset.mine)
        // }
        let findMine = this.mapArray.find((obj)=>{
            return (obj.id === e._targetInst.key);
        });
        if(findMine.mine){
            e.currentTarget.className ="cell hd_type11";

        }else{
            findMine.numberOfMineAround();
        }
        //this.textInput.className = "cell hd_type11";
       
    }

    

    mineArea() {
        let mapClassName = "cell";
        let mineArea = [];
        let mineClicked = this.state.mineClicked;
        
        for(let i=0; i<this.props.x; i++){
            for(let j=0; j<this.props.y; j++){
                
                if((i+"_"+j) === this.state.pressedTile){
                    mapClassName = "cell hd_pressed"
                }else {
                    mapClassName = "cell hd_closed"
                }
                if(this.mapArray){
                    let clickedMap = this.mapArray.find((obj)=>{
                        return obj.id === (i+"_"+j);
                    });
                    if(mineClicked && clickedMap.mine)
                        mapClassName = "cell hd_type10"
                }
                //rowOfPlate.push(<img src={closed} className="Minesweeper" alt="closed" />)
                mineArea.push(<div key={i+"_"+j} onMouseDown={this.onMapMouseDown} 
                onMouseUp={this.onMapMouseUp} data-mine={true} onMouseOut={this.onMapMouseLeave}
                 className={mapClassName} style={{width:24, height:24}}
                  onClick={this.onMapClick}
                 
                 />)
            }
        }

        return mineArea;
    }

    render() {
        console.log('rendering')

        
        return (
            <div key="p1" style={{height:24*this.props.y}}>
                <div key="m1" className="hd_wrapper-border-vert" style={{width:18, height:24*this.props.y}} />
                <div key="m2" onContextMenu={(e)=>{e.preventDefault()}} className="mineArea" style={{ width:24*this.props.x, height:24*this.props.y}}>{this.mineArea()}</div>
                <div key="m3" className="hd_wrapper-border-vert" style={{width:18, height:24*this.props.y}} />
            </div>
        )
    }

    
}

export default MidLine 