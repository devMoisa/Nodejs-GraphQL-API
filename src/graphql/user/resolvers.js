const users = async (_, __, { getUsers }) => {
  const users = await getUsers();
  return users.json();
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  return await response.json();
};

export const userResolvers = {
  Query: {
    user: user,
    users: users,
  },
};
