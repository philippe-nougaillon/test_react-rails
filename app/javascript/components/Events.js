import React from "react"
import PropTypes from "prop-types"
import Event from "../components/Event"

class Events extends React.Component {
  render () {
    const List = ({ list }) => (
      <ul>
        { list.map((item) => (
            <Event key={ item.id } item={ item } />
          ))
        }
      </ul>
    );

    return (
      <React.Fragment>
        Items: { this.props.items.length }
        <List list={ this.props.items } />
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  items: PropTypes.array
};

export default Events