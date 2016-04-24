import React from "react";

import Post from "../components/Post";
import * as PostActions from "../actions/PostActions";
import PostStore from "../stores/PostStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: PostStore.getAll(),
    };
  }

  componentWillMount() {
    PostStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    PostStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: PostStore.getAll(),
    });
  }

  reloadTodos() {
    PostActions.reloadTodos();
  }


  render() {

    const { todos } = this.state;

    const PostComponents = todos.map((todo) => {
        return <Post key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Anúncios</h1>
        <ul class="list-unstyled">{PostComponents}</ul>
      </div>
    );
  }
}
