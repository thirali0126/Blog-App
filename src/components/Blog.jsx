import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {AddBlog ,updateBlog , editBlog} from '../Redux/Action/Blogaction';

import shortid from 'shortid';

export default function Blog () {
  let {id} = useParams ();
  let history = useHistory ();
  const dispatch = useDispatch ();
  const [Title, setTitle] = useState ('');
  const [Description, setDescription] = useState ('');

  const geteditSelector = useSelector (state => state.blogs);
  console.log ('geteditSelector', geteditSelector.blogs);


  const submitHandler = e => {
    e.preventDefault ();
    if (id) {
      const blogdata = {
        id: id,
        Title: Title,
        Description: Description,
      };
      dispatch (updateBlog (blogdata));
      history.push ('/list');
    } else {
      const blogdata = {
        id: shortid.generate (),
        Title: Title,
        Description: Description,
      };
      dispatch (editBlog (''));
      dispatch (AddBlog (blogdata));
      console.log ('blogdata' + JSON.stringify (blogdata));
      history.push ('/list');
    }
  };
  useEffect (
  () => {
    if (id) {
      dispatch (editBlog (id));
    }
  },
  [id]
);

useEffect (
  () => {
    if (geteditSelector != null) {
      setTitle (geteditSelector.Title);
      setDescription (geteditSelector.Description);
      
    }
  },
  [geteditSelector]
);

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
        <button class="btnn" type="submit" onClick={submitHandler}>
          Add Blog
        </button>
      </div>
    </div>
  );
}

