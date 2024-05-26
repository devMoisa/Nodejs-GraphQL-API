const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  return response.json();
};

const posts = async (_, __, { getPosts }) => {
  const response = await getPosts();
  console.log('DEBUG', response);

  return response.json();
};

export const postResolver = {
  Query: {
    post: post,
    posts: posts,
  },
};
