import React from "react";

const Card = (props) => {
    
    let cardStyle = {
        width: "18rem"
    }
    

    return (
        <div className="card h-100" style={cardStyle}>
            <img src={props.img} className="card-img-top"  alt="..."/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary mt-auto">Find Out More!</a>
                </div>
        </div>
    );
};

export default Card;