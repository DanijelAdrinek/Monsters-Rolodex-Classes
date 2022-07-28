import { Component } from "react";

// importing a stylesheet for the searchbox
import './search-box.styles.css';

class Search extends Component {

    render() {
        return (
            // search box class is hard-coded, and monsters-search-box is passed to the element using props
            <input className={`search-box ${this.props.className}`} type='search' placeholder='search monsters' onChange={this.props.onChangeHandler}/>
        )
    }
}

export default Search;