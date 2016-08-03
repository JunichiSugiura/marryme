import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return(
      <div className="form-quickserach-wrapper ui center aligned grid">
        <form id="search-marriage" className="ui form aligned">
          <div className="ui category search">
            <div className="ui icon input">
              <input name="search-marriage" type="text" placeholder="Find your marriage by id" />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
