export const AddBlog = blogdata =>
  (console.log ('addAction', blogdata), 
  {
    type: 'CREATE_BLOGS',
    payload: blogdata,
  });
