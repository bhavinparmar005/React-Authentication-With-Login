import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function EditPage() {


  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [post, setPost] = useState(JSON.parse(localStorage.getItem('post')) || []);
  const navigate = useNavigate();

  let location = useLocation();
  useEffect(()=>{
    let login = JSON.parse(localStorage.getItem('loginuserdata'));
    if(!login){
      navigate('/LoginPage');
    }
},[])

  useEffect(() => {
    setTitle(location.state.title)
    setContent(location.state.content)
    setImage(location.state.image)
  }, [location.state])

  const handelSubmit = (e) => {
    e.preventDefault();

    let upadatePost = post.map((val) => {

      if (val.id == location.state.id) {
        val.title = title;
        val.content = content;
        val.image = image;
      }
      return val;
    })

    localStorage.setItem('post', JSON.stringify(upadatePost));
    setPost(upadatePost);


    setTitle('');
    setContent('');
    setImage('');

    Swal.fire({
      title: "Post Edit Successfully !",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
      timer: 2000
    });
    setTimeout(() => {
      navigate('/')
    }, 2100);
  }

  return (

    <>

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4">Edit Product</h2>
              <form onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Enter post title" onChange={(e) => setTitle(e.target.value)} value={title} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea className="form-control" id="content" rows={4} placeholder="Write your post..." onChange={(e) => setContent(e.target.value)} value={content} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="image-url" className="form-label">Image URL</label>
                  <input type="url" className="form-control" id="image-url" placeholder="Enter image URL" onChange={(e) => setImage(e.target.value)} value={image} required />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Edit Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPage
