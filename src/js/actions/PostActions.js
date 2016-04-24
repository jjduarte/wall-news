import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function createAd(adv) {
  console.log("aqui", adv)
  dispatcher.dispatch({
    type: "CREATE_AD",
    adv,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        title: "Vendo Relógio Apple",
        text: "Descrição do Relógio",
        complete: false,
        image: "https://rachaelshah.files.wordpress.com/2015/08/applewatch.jpeg",
        user: "João Paulo Duarte",
        email: "joao.lucio@blueticket.com.br",
        expires: "",
        category: "Venda"
      },
      {
        id: 6262627272,
        title: "Vendo Carro Ford Ka",
        text: "Descrição do carro",
        complete: false,
        image: "http://automotivebusiness.anankecdn.net.br/fotos/G_noticia_16155.gif",
        user: "João Paulo Duarte",
        email: "joao.lucio@blueticket.com.br",
        expires: "",
        category: "Aluguel"

      },
    ]});
  }, 1000);
}
