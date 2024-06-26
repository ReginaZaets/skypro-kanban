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
  // парсим ошибку с сервера
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error)
  }
  // if (response.status === 400) {
  //   throw new Error("Такой пользователь уже существует");
  // } else if (response.status === 500) {
  //   throw new Error("Ошибка сервера");
  // }
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
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    } else if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
}

export async function postTodos({title, topic, description, date, token}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    method:"POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    })
  })
  if (response.status === 400) {
    throw new Error("Заполните все поля");
  } else if (response.status === 500) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function deleteTodos ({_id,token}) {
  console.log(_id)
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${_id}`, {
    method: "DELETE", 
    headers: {
      Authorization: `Bearer ${token}`,
    }, 
  })
  if (!response.ok) {
    throw new Error("Ошибка удаления задачи");
  }
  const data = await response.json();
  return data;
}

export async function editTodos ({_id,token, newSaveCard}) {
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${_id}`, {
    method: "PUT", 
    headers: {
      Authorization: `Bearer ${token}`,
    }, 
    body: JSON.stringify(newSaveCard)
  })
  if (!response.ok) {
    throw new Error("Ошибка сохранения задачи");
  }
  const data = await response.json();
  return data;
}
