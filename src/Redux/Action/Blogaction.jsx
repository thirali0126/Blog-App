export const AddBlog = blogdata =>
  (console.log ('addAction', blogdata), 
  {
    type: 'CREATE_BLOGS',
    payload: blogdata,
  });

export const DeleteBlog = deletedata =>
  (console.log ('DeleteAction', deletedata), {
    type: 'DELETE_BLOGS',
    payload: deletedata,
  });

export const updateBlog = updatedata =>
  (console.log ('updateContactAction', updatedata), {
    type: 'UPDATE_BLOGS',
    payload: updatedata,
  });

export const editBlog = editdata =>
  (console.log ('updateContactAction', editdata), {
    type: 'EDIT_BLOGS',
    payload: editdata,
  });
