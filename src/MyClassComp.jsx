import React, { Component } from "react";


class MyFirstClassComp extends Component{

    constructor()
    {
        super();
        {
            this.state ={
                username : "Shekhar"
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
          console.log('componentDidUpdate callied:');
      }

      
    ChangeUserName = ()=>{
        this.setState({
            username: "ThoughtWin"
        })
    }

    render(){
        return(
            <>
            <h2> Class Component : {this.state.username} </h2>
            <button onClick={()=>this.ChangeUserName()}>Click Me</button>
            </>
        )
    }

}


export default MyFirstClassComp;