import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {loadUser} from '../../actions/auth'
class Profile_Admin extends Component {
 

  render() {

    if(!this.props.isAuthenticated)
    return(
        <div>
            You are not allowed to access this page
        </div>
    )
    else
    return (
      <div>
    
        {this.props.user.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps)(Profile_Admin)
