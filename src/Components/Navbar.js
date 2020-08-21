import React from 'react'
import Search from './Search'
import Icon from 'antd/es/icon'
import Button from './Button'
export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
            <canvas className='canva'>
            <script type="text/javascript" src="particles.js"></script>
            <script type="text/javascript" src="app.js"></script>
           </canvas>
           </div>
        )
    }
}
/*<div className='pannal'>
                <Button content='New Post' color='rgb(34, 131, 34)' />
                <Search />
                <div className='nav-right'>
                    <Icon type="message" style={{cursor:'pointer',alignSelf:'center'}} />
                    <Button content='Sign in' color='rgb(63, 63, 184)' />
                    <Button content='Sign Up' color='rgb(34, 131, 34)' style={{alignSelf:'flex-end'}} />
                </div>*/
