import React from 'react';

function Blogform () {
  return (
    <div className='alignment'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Blog Title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          defaultValue={''}
        />
      </div>
      <div className='d-grid gap-2'>
          <button class="btn" type="button">Add Blog</button>
      </div>
    </div>
  );
}

export default Blogform;
