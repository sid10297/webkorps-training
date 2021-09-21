const getContacts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.status >= 400) {
    throw new Error("Get contacts request failed.");
  }
  return await response.json();
};

export { getContacts };
