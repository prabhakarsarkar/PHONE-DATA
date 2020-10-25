import React from 'react'

function Api1(props) {
    console.log();
    return (
        <div className="main">
            <div className="imgesDiv">
                <img src={props.src} alt="phone_pic" className="imges" />
            </div>
            <div className="phoneName">
                <h1 className="name"> phoneName   {"  "+props.name}</h1>
                <h2 className="price">
                  PhonePrice   {props.price}
                </h2>
            </div>
            <hr></hr>


        </div>
    )
}

export default Api1;