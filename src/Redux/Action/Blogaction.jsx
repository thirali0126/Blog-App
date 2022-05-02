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