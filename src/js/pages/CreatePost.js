import React from "react";

import * as PostActions from "../actions/PostActions";

export default class Archives extends React.Component {

	constructor() {
	  super();
	  this.state = {title: '', text: '' };
	}

    handleTitleChange(e) {
      this.setState({title: e.target.value});
    }
    handleTextChange(e) {
      this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();

        var title = this.state.title.trim();
        var text = this.state.text.trim();
        console.log(title)
        console.log(text)
        if (!text || !title) {
          return;
        }
        // TODO: send request to the server
        PostActions.createAd({text, title});
        this.setState({title: '', text: ''});
      }


  render() {
  	const { title, text } = this.state;

    return (
          <div>
            <h1>Inserir novo anúncio</h1>

            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
              <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" id="title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} placeholder="Título"></input>
              </div>
              <div class="form-group">
                <label for="text">Descrição</label>
                <input type="text" class="form-control" id="text" value={this.state.text} onChange={this.handleTextChange.bind(this)} placeholder="Descrição"></input>
              </div>
              <div class="form-group">
                <label for="image">Imagem</label>
                <input type="file" id="image"></input>
                <p class="help-block">Insira uma imagem para seu anúncio.</p>
              </div>
              <input type="submit" value="Criar!" />
            </form>
          </div>
        );
  }
}
