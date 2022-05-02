import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {AddBlog} from '../Redux/Action/Blogaction';

import shortid from 'shortid';

export default function Blog () {
  // let {id} = useParams ();
  let history = useHistory ();
  const dispatch = useDispatch ();
  const [Title, setTitle] = useState ('');
  const [Description, setDescription] = useState ('');

  const submithandler = e => {
    e.preventDefault ();
    const blogdata = {
      id: shortid.generate (),
      Title: Title,
      Description: Description,
    };
    dispatch (AddBlog (blogdata));
    console.log ('blogdata' + JSON.stringify (blogdata));
    history.push ("/list");
  };

  return (
    <div className="alignment">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Blog Title"
          value={Title}
          onChange={e => setTitle (e.target.value)}
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
          required
          value={Description}
          onChange={e => setDescription (e.target.value)}
        />
      </div>
      <div className="d-grid gap-2">
        <button class="btnn" type="submit" onClick={submithandler}>
          Add Blog
        </button>
      </div>
    </div>
  )
}

