import React, { Component } from 'react';
import './SearchResults.css';

interface SearchResultsProps {
  searchTerm: string;
}

interface SearchResult {
  name: string;
  status: string;
}

interface SearchResultsState {
  results: SearchResult[];
}

interface Person {
  name: string;
  status: string;
}

class SearchResults extends Component<SearchResultsProps, SearchResultsState> {
  state: SearchResultsState = {
    results: [],
  };

  fetchData = (searchTerm: string) => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const fetchedResults: Person[] = data.results.map((result: Person) => ({
          name: result.name,
          status: result.status,
        }));

        this.setState({ results: fetchedResults });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  componentDidMount() {
    this.fetchData(this.props.searchTerm);
  }

  componentDidUpdate(prevProps: SearchResultsProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.fetchData(this.props.searchTerm);
    }
  }

  render() {
    const { results } = this.state;
    return (
      <div className="search-results">
        <h2>Search Results</h2>
        {results.map((result) => (
          <div className="result-item" key={result.name}>
            <h3>{result.name}</h3>
            <p>Status: {result.status}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
