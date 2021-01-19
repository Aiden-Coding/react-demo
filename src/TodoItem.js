import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {

  render() {
    return <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
  }
  handleClick() {
    this.props.itemDelete(this.props.index)
    // alert(this.props.index)
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  itemDelete: PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem;
