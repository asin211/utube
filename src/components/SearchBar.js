import React from 'react';


function SearchBar(props) {
    
    return (
      <form onSubmit={props.onSubmit}>
        <div className="form-container">
          {/* <label>Search</label> */}
          <input
            // value={title}
            onChange={props.onSearchChange}
            type="text"
            placeholder="Search YouTube Videos..."
            className="search"
          />
        </div>
      </form>
    );
}

export default SearchBar;