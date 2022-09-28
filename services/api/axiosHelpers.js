export const CreateAuthHeader = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};
