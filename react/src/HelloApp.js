import React from 'react';
import ItemList from './ItemList.js';


export default class HelloApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    const title = "Hello. What's Up?";

    return(
      <div>
        <h3>{title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Publish</button>
        </form>
        <ItemList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      // note: use unshift to prepend new items upfront (reverse chronological order)
      //  items: prevState.items.unshift( newItem ),
      items: prevState.items.concat( newItem ),
      text: ''
    }));
  }

} // class HelloApp
