import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {

    constructor(props){
      super(props);
  
      this.state = {
        cocktails: [],
      }; 
    }
    
    componentDidMount(){
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => {
         this.setState({cocktails: res.data.drinks});
      });
    }
  
    render(){
      const cocktailsss = this.state.cocktails.map((cocktail, index) => <ListItem {...cocktail} key={index}/>)
      return (
        <div>
          <ul>{cocktailsss}</ul>
        </div>
      );
    }
  }

  const ListItem = ({strDrink}) => <li>{strDrink}</li>

  //List = Hoc(List);

  export default List;