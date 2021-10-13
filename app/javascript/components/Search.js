import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label  htmlFor="search">
          { this.props.children }
        </label>
        <input  id="search" 
                type="text" 
                autoFocus="true"
                value={ this.props.search }
                onChange={ this.props.onSearch }
        />
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func
};

export default Search
