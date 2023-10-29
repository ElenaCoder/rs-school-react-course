import React, { Component, ChangeEvent } from 'react';
import './SearchInput.css';

interface SearchInputProps {
  onSearch: (term: string) => void;
}

interface SearchInputState {
  searchTerm: string;
}

class SearchInput extends Component<SearchInputProps, SearchInputState> {
  state: SearchInputState = {
    searchTerm: '',
  };

  handleSearch = (): void => {
    const { onSearch } = this.props;
    const searchTerm = this.state.searchTerm.trim();
    onSearch(searchTerm);
    localStorage.setItem('searchTerm', searchTerm);
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={() => this.handleSearch()}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchInput;
