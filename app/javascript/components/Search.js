import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <label  htmlFor="search">Search:</label>
          <input  id="search" 
                  type="text" 
                  value={ this.props.search }
                  onChange={ this.props.onSearch }
          />
        </div>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func
};

export default Search
