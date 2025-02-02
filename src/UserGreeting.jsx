// Using Conditional Rendering..

import PropTypes from 'prop-types'

function UserGreeting(props){

    // >> Method 1:  

    /* if(props.isLoggedin){

        return(
            <h2>Welcome {props.username}</h2>
        )
    }
    else{
        return(
            <h2>Please Login to Continue</h2>
        )
    } */

     // >> Method 2:

    const welcomemsg = <h2 className="welcome-msg">Welcome {props.username}</h2>
    const logprmt = <h2 className="log-prmt">Please Login to Continue</h2>

    return(
        props.isLoggedin ? welcomemsg : logprmt
    )

     // >> Method 3:

    return(
        props.isLoggedin ? <h2 className="welcome-msg">Welcome {props.username}</h2> : <h2 className="log-prmt">Please Login to Continue</h2>
    )
}

UserGreeting.proptypes = {
    isLoggedin : PropTypes.bool,
    username : PropTypes.string

}
UserGreeting.defaultProps = {
    username : "Default name"
}

export default UserGreeting