import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Steps2 }  from './botSteps';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // name: '',
      // gender: '',
      // age: '',
    };
    console.log("here",Steps2);
  }

  componentWillMount() {
    // console.log(this.props);
    const { steps } = this.props;
    

    const { search } = steps;
    this.Search_function(search.value, Steps2);

    this.setState({ search });


  }
  Search_function(search, inside){
    let search_array= search.split(' ');
    let search_inside=[];
    inside.map((value,key)=> (search_inside.push(value.id)));
    let a = search_array.every(elem => search_inside.indexOf(elem) > -1); // true or false
    console.log(a);
    console.log(search_array);
    console.log(search_inside);
  }

  

  render() {
    
    console.log(this.state);
    // console.log("Review: ",this.state);
    const { search } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Search = {search.value}</h3>
        
      </div>
    );
  }
}

Search.propTypes = {
  steps: PropTypes.object,
};

Search.defaultProps = {
  steps: undefined,
};
export default Search;