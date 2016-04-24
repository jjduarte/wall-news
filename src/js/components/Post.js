import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { complete, edit, text, image, title, user, email, expires, category } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    const imgStyle = {
      height: "60px",
      width: "60px" 
    };
    
    var panelStyle;
    switch(category) {
      case 'Venda': panelStyle = "panel-primary"; break;
      case 'Aluguel': panelStyle = "panel-danger";
    }
    

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <div class="panel" class={panelStyle}>
          <div class="panel-heading">
            <h3 class="panel-title">{title}</h3>
          </div> 
          <div class="panel-body">
            <img src={image} style={imgStyle}></img>
            <div>{text}</div>
            <div>{icon}</div>
            <div>{user}</div>
            <div>{email}</div>
          </div> 
        </div>
      </li>
    );
  }
}
