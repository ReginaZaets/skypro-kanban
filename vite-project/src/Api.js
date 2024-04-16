// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTodos({token}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
}

export async function registerUser({ name, login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  if (response.status === 400) {
    throw new Error("Такой пользователь уже существует");
  }
  const data = await response.json();
  return data;
}

export async function loginUser({ login, password}) {
    const response = await fetch ("https://wedev-api.sky.pro/api/user/login", {
        method:"POST",
        body: JSON.stringify({
            login,
            password,
          }),
    })
    const data = await response.json();
    return data;
}
