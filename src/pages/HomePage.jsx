
import './HomePage.css'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    let navigation = useNavigate();
    const [PrintPost, setPrintPost] = useState(JSON.parse(localStorage.getItem('post')) || []);


 

    const deletePost = (id) => {

        let deletedPost = PrintPost.filter((val) => {
            return val.id != id
        })




        Swal.fire({
            title: "Post Deleted Successfully !",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 2000

        });

        localStorage.setItem('post', JSON.stringify(deletedPost));
        setPrintPost(deletedPost)

    }

    const dummyCard = () => {
        // alert('This is a dummy card')
        Swal.fire({
            position: "center",
            icon: "info",
            title: "This is a dummy card",
            showConfirmButton: false,
            timer: 2000
        });
    }


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
                        <img src="./slide1.jpg" className="d-block w-100 img_hight" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./slide2.jpg" className="d-block w-100 img_hight" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="./slide3.jpg" className="d-block w-100 img_hight" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>

            <h1 className='mt-3 text-center text-black-50'> Show Product</h1>

            <div className="container my-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {
                        PrintPost.map((val) => {
                            return (
                                <div className="col">
                                    <div className="card h-auto card_hover">
                                        <img src={val.image} className="card-img-top" alt="Card Image" height={'250px'} width={'250px'} />
                                        <div className="card-body">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.content}.</p>
                                            <div className="d-flex justify-content-between">
                                                <button className="btn btn-primary" onClick={() => navigation(`/EditPage`, { state: val })} ><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                                <button className="btn btn-danger" onClick={() => deletePost(val.id)}> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col">
                        <div className="card h-auto card_hover">
                            <img src="./slide1.jpg" className="card-img-top" alt="Card Image" height={'250px'} width={'250px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a description for the card. It contains some placeholder text.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => dummyCard()}><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                    <button className="btn btn-danger" onClick={() => dummyCard()}> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card_hover">
                            <img src="./slide2.jpg" className="card-img-top" alt="Card Image" height={'250px'} width={'250px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a description for the card. It contains some placeholder text.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => dummyCard()}><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                    <button className="btn btn-danger" onClick={() => dummyCard()}> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card_hover">
                            <img src="./slide3.jpg" className="card-img-top" alt="Card Image" height={'250px'} width={'250px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a description for the card. It contains some placeholder text.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => dummyCard()}><i class="bi bi-pencil me-2"></i>Edit Post</button>
                                    <button className="btn btn-danger" onClick={() => dummyCard()}> <i class="bi bi-trash me-2"></i>Delete Post</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

           

            < Footer />

        </>
    )
}

export default HomePage
