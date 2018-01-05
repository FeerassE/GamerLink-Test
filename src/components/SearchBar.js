import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setUser } from '../actions'



class SearchBar extends Component {
    constructor(props) {
        super();

        this.state = {value: 'Look up user'};

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
      }

    onChangeHandler(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value)
        this.props.setUser(this.state.value)
        this.setState({value: ''})
    }
    
    clickHandler(){
        this.setState({value: ''})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="searchForm">
                    <img src="./images/icons/search.png" className="searchIcon"/>
                    <input 
                        className='searchBar' 
                        value={this.state.value} 
                        onChange={this.onChangeHandler} 
                        onClick={this.clickHandler} 
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { setUser: state.setUser}
}

export default connect(mapStateToProps, { setUser })(SearchBar);