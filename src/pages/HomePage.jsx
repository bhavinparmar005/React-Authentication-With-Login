import React from 'react'
import './HomePage.css'
import Navbar from '../components/Navbar'


function HomePage() {
    return (
        <>
            <Navbar />


            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval={2000}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./public/slide1.jpg" className="d-block w-100 img_hight" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./public/slide2.jpg" className="d-block w-100 img_hight" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="./public/slide3.jpg" className="d-block w-100 img_hight" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>

            <h1 className='mt-3 text-center text-black-50'> Show Post</h1>

            <div className="container my-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-auto card_hover">
                            <img src="./public/slide1.jpg" className="card-img-top" alt="Card Image" height={'200px'} width={'200px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a description for the card. It contains some placeholder text.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary"><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                    <button className="btn btn-danger"> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card_hover">
                            <img src="./public/slide2.jpg" className="card-img-top" alt="Card Image" height={'200px'} width={'200px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a description for the card. It contains some placeholder text.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary"><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                    <button className="btn btn-danger"> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card_hover">
                            <img src="./public/slide3.jpg" className="card-img-top" alt="Card Image" height={'200px'} width={'200px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a description for the card. It contains some placeholder text.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary"><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                    <button className="btn btn-danger"> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage
