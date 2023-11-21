import React, { Component } from 'react';
import ButtonComponent from './components/ButtonComponent';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';

interface AppState {
  searchTerm: string;
}

class App extends Component<object, AppState> {
  state: AppState = {
    searchTerm: localStorage.getItem('searchTerm') || '',
  };

  handleSearch = (term: string): void => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div>
        <ButtonComponent />
        <SearchInput onSearch={this.handleSearch} />
        <SearchResults searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
