// app/actions.js

export async function getUsers() {
  const URL = "https://668ae5622c68eaf3211e25c9.mockapi.io/api/v1/users";
  let users = [];
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    users = await response.json();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return { users: [] };
  }

  return { users };
}
