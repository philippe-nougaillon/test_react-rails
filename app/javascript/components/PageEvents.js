import React from "react"
import PropTypes from "prop-types"
import Search from "../components/Search"
import Events from "../components/Events"

class PageEvents extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <Search />
        <Events items={this.props.items} />
      </React.Fragment>
    );
  }
}

PageEvents.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
export default PageEvents
