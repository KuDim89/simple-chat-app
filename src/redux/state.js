const store = {
  profilePage : {
    posts : [
      {id: 1, messages: 'Hi here', likesCount: 12},
      {id: 2, messages: 'Hi Hi', likesCount: 11}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Andrey'}
    ],
    messages: [
      {id: 1, message: 'Hi here'},
      {id: 2, message: 'Hi Hi'}
    ]
  },
  sidebar: {
    friendItems: [
      {name: "Andrey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2z3zikweh1H0qOTvo4P8s-zO-7Hhp6z5tyw&usqp=CAU"},
      {name: "Sasha", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqmuPv00ChEzPIFyaL410YjkVQBBCKusMfw&usqp=CAU"},
      {name: "Sveta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3yPJDodVuAGLFP6FIMd0LlsOx7H_X9EMkA&usqp=CAU"}
    ]
  }
}

export default store;