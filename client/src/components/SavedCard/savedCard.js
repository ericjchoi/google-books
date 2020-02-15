import React from "react";

function SavedCard(props) {
    return (
        <div className="card border-info">
            <div className="card-body">
                <h5 className="card-title bookTitle">{props.title}</h5>
                <button className="btn btn-sm btn-warning viewBtn"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button>
                <button className="btn btn-sm btn-danger deleteBtn" id={props.id} onClick={() => props.deleteBtnClickHandle(props.id)}>Delete</button>
                <p>Written by {props.authors.join(", ")}</p>
                <p className="bookInfo"><img src={props.image} className="bookImage" alt="bookImage" />{props.description}</p>
            </div>
        </div>
    );
}

export default SavedCard;