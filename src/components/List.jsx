import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {DeleteBlog, editBlog} from '../Redux/Action/Blogaction';
import {useHistory} from 'react-router-dom';

export default function List () {
  let history = useHistory ();
  const dispatch = useDispatch ();

  const blogSelector = useSelector (state => state.blogs.blogs);
  console.log ('blogSelector ', blogSelector);

  const edithandler = data => {
    console.log ('edit', data);
    dispatch (editBlog (data));
    history.push ('/thirali');
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">

        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <tr scope="col" />
              </tr>
            </thead>
            <tbody>
              {blogSelector.map (blogs => (
                <tr>
                  <td>{blogs.id}</td>
                  <td>{blogs.Title}</td>
                  <td>{blogs.Description}</td>
                  <td>

                    <button
                      type="button"
                      onClick={() => dispatch (DeleteBlog (blogs.id))}
                      className="btn btn-sm btn-danger mx-3"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-dark mx-3"
                      onClick={() => edithandler (blogs)}
                    >
                      Update
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
