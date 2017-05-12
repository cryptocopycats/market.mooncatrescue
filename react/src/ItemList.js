import React from 'react';


/*
  todo: convert to a function - why? why not?
 */

export default class ItemList extends React.Component {

  render() {
    return(
      <div>
        {this.props.items.map(item => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    );
  }

} // class ItemList
