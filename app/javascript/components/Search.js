import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <label htmlFor="search">Search:</label>
          <input is="search" type="text" onChange={ this.props.onSearch } />
        </div>
      </React.Fragment>
    );
  }
}

export default Search
