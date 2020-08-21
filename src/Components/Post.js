import React from 'react'
import download from '../download.png'
import '../App.css';
import Icon from 'antd/es/icon';
export default class Post extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         like:'',
    //     }
    // }
    
    // handleLike=()=>{
    //     this.newlike=((this.state.like===''&&this.state.dislike===''));
    //     this.setState({like:this.newlike,dislike:''});

    // }
    
    render(){
        const {title} = this.props;
        return(
            <div className="post">
                <img style={{boxSizing:'border-box',borderRadius:'5px'}} width='100%' src={download} alt="react download"/>
                <p style={{padding:'0px 10px'}}>{title}</p>
                <div className='post-footer'>
                <Icon type="like"  style={{padding:'0px 15px'}} />
                <Icon type="dislike" style={{padding:'0px 15px'}}/>
                <Icon type='message' style={{padding:'0px 15px'}}/>
                <Icon type="eye" style={{padding:'0px 15px'}} />
                </div>

            </div>
        )
    }

}