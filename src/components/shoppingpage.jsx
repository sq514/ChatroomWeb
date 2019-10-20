import React, { Component } from 'react';
class ShoppingPage extends Component {
    state = {  }

    fetchItems = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const item = await data.json();
        console.log(item);
        console.log(123)
    }
    render() { 
        console.log(this.props)
        return ( 
            <h1>hello! {this.props.match.params.username}</h1>
         );
    }
}
 
export default ShoppingPage;