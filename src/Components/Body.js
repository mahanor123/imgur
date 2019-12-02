import React from 'react'
import Post from './Post'
const images =['ABC','BCD','CDE','DEF','EFG','FGH','GHI','HIJ','IJK','JKL','KLM','LMN','MNO','NOP','OPQ','PQR'];
export default class Body extends React.Component{
    
    render(){
        return(
            <div className='post-container'>
                {images.map((img) => {return <Post title={img}/>})}
            </div>
        )
    }
}