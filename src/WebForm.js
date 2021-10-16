import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const WebForm = () => {
    const fontFamily = {
        fontFamily: `josefin Sans,Arial Narrow,Arial, sans-serif`,
    }
    return (
        <>
            <h1 className="text-center text-danger text-capitalize my-5" style={fontFamily}>Welcom to my website </h1>
            <div className="container">
                <div className="row">
                    <div className="col"><div class="card">
                        <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="300px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div class="card">
                        <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="300px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div class="card">
                        <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="300px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebForm
