import React from "react"
import PropTypes from "prop-types"
import Event from "../components/Event"

class Events extends React.Component {
  render () {
    return (
      <React.Fragment>
        Items: {this.props.items.length}
        <ul>
          { this.props.items.map((item) => (
              <Event key={item.id} item={item} />
            )
          )}
        </ul>
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  items: PropTypes.array
};

export default Events
