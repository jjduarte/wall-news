import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class PostStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
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
        id: 235684679,
        title: "Vendo Carro Ford Ka",
        text: "Descrição do carro",
        complete: false,
        image: "http://automotivebusiness.anankecdn.net.br/fotos/G_noticia_16155.gif",
        user: "João Paulo Duarte",
        email: "joao.lucio@blueticket.com.br",
        expires: "",
        category: "Aluguel"

      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  createAd(adv) {
    console.log(adv)
    const id = Date.now();

    this.todos.push({
      id,
      text: adv.text,
      title: adv.title,
      user: "João Paulo Duarte",
      email: "joao.lucio@blueticket.com.br",
      expires: "",
      image: "http://cdntbs.astonmartin.com/sitefinity/homepage-carousel/dbx-homepage.jpg?sfvrsn=0",
      category: "Venda",
      complete: false
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }

      case "CREATE_AD": {
        console.log('action', action)
        this.createAd(action.adv);
        break;
      }

      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const postStore = new PostStore;
dispatcher.register(postStore.handleActions.bind(postStore));

export default postStore;
