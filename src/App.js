import React from 'react';
import './App.css';

function App() {
  const books = ['Silent patient', 'Beneath a scarlet sky'];
  const trainee = ['Antonela', 'React'];
  const date = new Date().toUTCString();

  return (
    <div className="App">
      <FirstClass date={date}/>
      <First books={books} trainee={trainee} />
    </div>
  );
}

function First(props){
  const book = 'The girl on the train';
  let books = props.books.map(b => {return b + ', '});
  console.log('books from props: ', books);
  books = [...books, ...book];

  const [name, technology] = props.trainee;
  console.log('all books: ', books);
  console.log('trainee from props', props.trainee);
  console.log('name: ', name, 'technology: ', technology);
  return (
    <div>
      <div>Hello i'm {name} and i want to learn {technology}</div>
      <div>The favourite books are: {books}</div>
    </div>
     
  );
}

class FirstClass extends React.Component {
  render() {
    console.log('today is: ', this.props.date);
    return <h1>Hello, today is {this.props.date}</h1>;
  }
}

export default App;
