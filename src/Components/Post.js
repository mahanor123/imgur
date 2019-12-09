import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import './Post.css';
import Icon from 'antd/es/icon';
import Button from './Button'
export default class Post extends React.Component{
    constructor(){
        super();
        this.state={
            like:'',
            dislike:'',
            showPostDetails: false,
            value:'',
            comments: []
        }
    }
    
    handleLike=()=>{
        this.newlike=((this.state.like===''&&this.state.dislike==='')||(this.state.like===''&&this.state.dislike==='filled'))?'filled':'';
        this.setState({like:this.newlike,dislike:''});

    }
     handleDislike=()=>{
        this.newdislike=((this.state.dislike===''&&this.state.like==='')||(this.state.dislike===''&&this.state.like==='filled'))?'filled':'';
        this.setState({dislike:this.newdislike,like:''});
    }

    exitPostDetails = ()=> {
        this.setState({showPostDetails: false});
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
        value:e.target.value
        })
    }

    handleComment = () =>{
        // console.log('handlecomment')
        if(this.state.value)
        this.setState({comments:this.state.comments.concat(this.state.value)})
    }

    handleClearLatest = () =>{
        this.state.comments.pop()
        this.setState({comments:this.state.comments})
    }
    handleClear = () =>{
        this.setState({comments:[]})
    }
  
    render(){
        const {title} = this.props;

        const postDetails = <div className="postDetails" onClick={this.exitPostDetails}>
            <div className="postContainer" onClick= {e=>e.stopPropagation()}>
                <img src={logo} alt="Post"/>
                <input style={{outline:'none',height:'23px'}} onChange={this.handleChange}></input>
                <Button handleFunction={this.handleComment} color='grey' content='Add Comment'/>
                <Button handleFunction={this.handleClearLatest} color='grey' content='Clear latest comment'/>
                <Button handleFunction={this.handleClear} color='grey' content='Clear All'/>
                <div className="postComments">
                    <ol>
                        {this.state.comments.map((comment, i) => (<li className="postComment" key={i}>{comment}</li>))}
                    </ol>
                </div>
            </div>
        </div>

        return(
            <div className="post">
                <img style={{boxSizing:'border-box',borderRadius:'5px'}} width='100%' src={logo} alt="react logo"/>
                <p style={{padding:'0px 10px',backgroundcolor:'grey'}}>{title}</p>
                <div className='post-footer'>
                <Icon type="like"  theme={this.state.like} onClick={this.handleLike} style={{padding:'0px 15px',outline:'none'}} />
                <Icon type="dislike"theme={this.state.dislike} onClick={this.handleDislike} style={{padding:'0px 15px',outline:'none'}}/>
                {/* <div className='up-count'>0</div>
                <div className='down-count'>0</div> */}
                <Icon type='message' style={{padding:'0px 15px',outline:'none'}} onClick={()=> this.setState({showPostDetails: 'block'})}/>
                <Icon type="eye" style={{padding:'0px 15px'}} />
                </div>

                {this.state.showPostDetails ? postDetails: null}
            </div>
        )
    }

}