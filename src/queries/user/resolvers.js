const user = () => {
  return {
    id: '1',
    userName: 'devMoises',
  };
};

const users = async () => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const userResolvers = {
  Query: {
    user: user,
    users: users,
  },
};
