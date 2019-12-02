import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import Icon from 'antd/es/icon';
export default class Post extends React.Component{

    render(){
        const {title} = this.props;


        return(
            <div className="post">
                <img style={{boxSizing:'border-box',borderRadius:'5px'}} width='100%' src={logo} alt="react logo"/>
                <p style={{padding:'0px 10px'}}>{title}</p>
                <div className='post-footer'>
                <Icon type="like" style={{padding:'0px 15px'}} />
                <Icon type="dislike" style={{padding:'0px 15px'}}/>
                <Icon type='message' style={{padding:'0px 15px'}} />
                <Icon type="eye" style={{padding:'0px 15px'}} />
                </div>

            </div>
        )
    }

}