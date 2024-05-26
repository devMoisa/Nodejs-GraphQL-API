const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  return await response.json();
};

const posts = async (_, __, { getPosts }) => {
  const response = await getPosts();
  return await response.json();
};

export const postResolver = {
  Query: {
    post: post,
    posts: posts,
  },
};
