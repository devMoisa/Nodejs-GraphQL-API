const user = () => {
  return {
    id: '1',
    userName: 'devMoises',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'devMoises1',
    },
    {
      id: '2',
      userName: 'devMoises2',
    },
  ];
};

export const userResolvers = {
  Query: {
    user: user,
    users: users,
  },
};
