import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';

import Wins from './Wins';
import Saves from './Saves';
import Goals from './Goals';

class StatContainer extends Component {

    render(){
        return(
            <div className="statContainer">
                {_.isEmpty(this.props.currentUser) ? 
                    <div className="username">
                    </div> :
                    <div className="username"> 
                        <h4>{this.props.currentUser.displayName}</h4>
                        <h5>Last Updated: {this.props.currentUser.lastUpdated}</h5>
                    </div>
                }
                <Wins />
                <Saves />
                <Goals />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(StatContainer);