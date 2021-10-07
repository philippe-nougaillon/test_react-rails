import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  render () {

    const handleChange = (event) => {
      this.setState({ searchTerm: event.target.value });
      console.log(event.target.value);
    };

    return (
      <React.Fragment>
        <div>
          <label htmlFor="search">Search:</label>
          <input is="search" type="text" onChange={ handleChange } />
          <p>
            Search for <strong>{ this.state.searchTerm }</strong>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Search
