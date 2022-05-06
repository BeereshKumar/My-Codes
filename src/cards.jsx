import React from "react";


function card(props) {
    return (
        <>
            <div className="cards">
                <div className="cards">
                    <img src={props.imgsrc} alt="mypic" className="card__img" />
                    <div className="card__info">
                        <span className="card__cegory">{props.title}</span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} target="blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default card;