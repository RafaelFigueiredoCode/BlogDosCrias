


const getAuthorName = (userId) => {
  const user = users.find((u) => u.id === userId);
  return user ? user.name : 'Desconhecido';
};
