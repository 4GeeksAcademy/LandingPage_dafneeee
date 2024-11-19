import React from "react";

const Cards = () => {
    return (
        <div className="container mt-4 mb-4">
            <div className="row g-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 d-flex flex-column justify-content-between text-center">
                            <img 
                                src="https://fastly.picsum.photos/id/272/1920/1280.jpg?hmac=dgijlTamBDYj5kDYWF9leTKyXHXEvPa5WfXydXt9AII"
                                className="card-img-top" 
                                alt="..." 
                            />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
