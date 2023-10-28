import React from "react";
import mylogo from './logo.svg'
import { useNavigate } from "react-router-dom";
const Card = (props) => {

    // console.log(props);


    localStorage.setItem("token", "shekhar")

    const navigate =  useNavigate()

    const goBack = () =>{
        navigate('/')
    }

    const showAlert = (msg) => {
        console.log("Hello");
       if(typeof msg === "string"){
        alert(msg)
       }else{
        alert("msg to bhej")
       }
    }

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={mylogo} alt="Card imageee cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.items.title}</h5>

                    <p className="card-text">{props.items.description}</p>
                    <button href="#" className={`btn btn-${props.items.color === "dark" ? "warning": props.items.color}`} onClick={showAlert}>Open Alert 1</button>
                    {/* <button href="#" className="btn btn-primary" onClick={() => showAlert("alert 2")}>Open Alert 2</button> */}
                </div>

                <button className="btn btn-outline-danger" onClick={goBack}> Go Back</button>
            </div>

        </>
    )
}

export default Card;

Card.defaultProps ={
    items:{
        title: "My Title",
        description: "Demo Data",
        color: "red"
    }
}