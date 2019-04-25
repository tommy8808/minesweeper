import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner" style={{width:24*this.props.x, height:48}}>유쾌한 지뢰찾기</div>
        )
    }
}


export default Banner
