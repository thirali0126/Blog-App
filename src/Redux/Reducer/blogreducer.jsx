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
    case 'CREATE_BLOG': {
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    }
    default:
      return state;
}
}