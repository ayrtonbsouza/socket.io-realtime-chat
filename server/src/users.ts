interface addUserInterface {
  id: string;
  name: string;
  room: string;
}

interface User {
  id: string;
  name: string;
  room: string;
}

interface ErrorMessage {
  error: string;
}

const users: Array<User> = [];

const addUser = ({ id, name, room }: addUserInterface): any => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    user => user.room === room && user.name === name,
  );

  if (existingUser) {
    return { error: 'Username is taken' } as ErrorMessage;
  }

  const user: User = { id, name, room };

  users.push(user);

  return user as User;
};

const removeUser = (id: string): User | undefined => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

const getUsersInRoom = (room: string): Array<User> | undefined => {
  return users.filter(user => user.room === room);
};

export { addUser, removeUser, getUser, getUsersInRoom };
