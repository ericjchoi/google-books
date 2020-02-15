import React from "react";
import "./resultCard.css";

function ResultCard(props) {
    return (
        <div className="card border-info">
            <div className="card-body">
                <h5 className="card-title bookTitle">{props.title}</h5>
                <button className="btn btn-sm btn-warning viewBtn"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button>
                <button className="btn btn-sm btn-info saveBtn" id={props.id} onClick={() => props.saveBtnClickHandle(props.id)}>Save</button>
                <p>Written by {(props.authors === undefined) ? props.authors : props.authors.join(", ")}</p>
                <p className="bookInfo resultView"><img src={props.image} className="bookImage" alt="bookImage" /><span>{props.description}</span></p>
            </div >
        </div >
    );
}

export default ResultCard;