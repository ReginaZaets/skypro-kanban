export const cardList = [
  {
    id: 1,
    topic: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
    status: "Без статуса",
  },
  {
    id: 2,
    topic: "Research",
    title: "Название задачи",
    date: "30.10.23",
    status: "Без статуса",
  },
  {
    id: 3,
    topic: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
    status: "Без статуса",
  },
  {
    id: 4,
    topic: "Copywriting",
    title: "Название задачи",
    date: "30.10.23",
    status: "Без статуса",
  },
  {
    id: 5,
    topic: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
    status: "Без статуса",
  },
  {
    id: 6,
    topic: "Research",
    title: "Название задачи",
    date: "30.10.23",
    status: "Нужно сделать",
  },
  {
    id: 7,
    topic: "Research",
    title: "Название задачи",
    date: "30.10.23",
    status: "В работе",
  },
  {
    id: 8,
    topic: "Copywriting",
    title: "Название задачи",
    date: "30.10.23",
    status: "В работе",
  },
  {
    id: 9,
    topic: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
    status: "В работе",
  },
  {
    id: 10,
    topic: "Research",
    title: "Название задачи",
    date: "30.10.23",
    status: "Тестирование",
  },
  {
    id: 11,
    topic: "Research",
    title: "Название задачи",
    date: "30.10.23",
    status: "Готово",
  },
  // {
  //     id: 12,
  //     topic: 'Other',
  //     title: 'Название задачи',
  //     date: '30.10.23',
  //     status: 'Готово'
  // },
];

export const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export const Colomns = [
  {
    id: "1",
    status: "Без статуса",
    index: 0,
  },
  {
    id: "2",
    status: "Нужно сделать",
    index: 1,
  },
  {
    id: "3",
    status: "В работе",
    index: 2,
  },
  {
    id: "4",
    status: "Тестирование",
    index: 3,
  },
  {
    id: "5",
    status: "Готово",
    index: 4,
  }
]

export const paths = {
  MAIN: "/",
  EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
  CARD: "/card/:id",
  NEWCARD: "/new-card",
  NOT_FOUND: "*",
  POPBROWSE: "/card/:id",
};

export const formFields = {
    name: "",
    login: "",
    password: "",
};
