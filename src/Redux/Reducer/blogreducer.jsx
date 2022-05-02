const initialstate = {
  blogs: [
    {
      id: 1,
      Title: '2332222222222222',
      Description: 'Thirali',
    },
    {
      id: 2,
      Title: '4442222222222222',
      Description: 'Zalak',
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