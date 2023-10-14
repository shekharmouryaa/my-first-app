import React from "react";
import mylogo from './logo.svg'
const Card = (props) => {

    // console.log(props);

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
            </div>

        </>
    )
}

export default Card