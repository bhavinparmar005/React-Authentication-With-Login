import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';

function AddPost() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [post, setPost] = useState(JSON.parse(localStorage.getItem('post')) || []);

  const handelSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      content: content,
      image: image
    }



    let record = [...post, obj];

    localStorage.setItem('post', JSON.stringify(record));

    setPost(record);


    setTitle('')
    setContent('')
    setImage('')

    alert('Post submitted successfully');
  }
  return (
    <>
      < Navbar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4">Add New Post</h2>
              <form onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Enter post title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea className="form-control" id="content" rows={4} placeholder="Write your post..." onChange={(e) => setContent(e.target.value)} value={content} />
                </div>
                <div className="mb-3">
                  <label htmlFor="image-url" className="form-label">Image URL</label>
                  <input type="url" className="form-control" id="image-url" placeholder="Enter image URL" onChange={(e) => setImage(e.target.value)} value={image} />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddPost
