const initialstate = {
  blogs: [
    {
      id: 1,
      Title: 'Fashion',
      Description: 'erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.',
    },
    {
      id: 2,
      Title: 'Read',
      Description: 'erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.',
    },
  ],
};

export const Blogreducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'CREATE_BLOGS': {
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    }
    case "DELETE_BLOGS":
      {
       
        return {
          ...state,
          blogs: state.blogs.filter(
            (blog) => blog.id != action.payload
          ),
        };

      }

      case "UPDATE_BLOGS": {
       
        return {
          ...state,
          blogs: state.blogs.map((blog) =>
          blog.id == action.payload.id ? action.payload : blog
          ),
        };
      }

      case "EDIT_BLOGS": {
        return {
          ...state,
          blogs: action.payload
        };
      }
    default:
      return state;

  }
}