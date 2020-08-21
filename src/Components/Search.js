import React from 'react'
import Icon from 'antd/es/icon'
export default class Search extends React.Component{
    render(){
        return(
            <div>
                <input className='search' placeholder='search here' style={{border:'black solid 1px',outline:'none',borderRadius:'3px',marginBottom:'5px',width:'400px',height:'25px',padding:'0px 7px', background: 'background'}}/>
                <Icon type="search" style={{marginLeft:'-20px',cursor:'pointer',verticalAlign:'sub'}}/>
            </div>
        )
    }
}