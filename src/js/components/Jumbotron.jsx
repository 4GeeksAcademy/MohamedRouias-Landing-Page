import React from 'react'

const Jumbotron = (props) => {

  return (
    <div>
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">{props.title}</h1>
                <p className="col-md-8 fs-4">
                    {props.description}
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    </div>
  )
}

export default Jumbotron;
