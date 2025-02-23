import React from 'react'
import Navbar from '../components/Navbar'

function AddPost() {
  return (
    <>
      < Navbar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4">Add New Post</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Enter post title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea className="form-control" id="content" rows={4} placeholder="Write your post..." defaultValue={""} />
                </div>
                <div className="mb-3">
                  <label htmlFor="image-url" className="form-label">Image URL</label>
                  <input type="url" className="form-control" id="image-url" placeholder="Enter image URL" />
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
