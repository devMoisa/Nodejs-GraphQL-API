const post = () => {
  return {
    id: '1',
    title: 'Post Title 1',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Post Title 1',
    },
    {
      id: '2',
      title: 'Post Title 2',
    },
  ];
};

export const postResolver = {
  Query: {
    post: post,
    posts: posts,
  },
};
