import React, { Component } from 'react';
import './SearchResults.css';
import Loader from './Loader';

interface SearchResultsProps {
  searchTerm: string;
}

interface SearchResult {
  name: string;
  status: string;
}

interface SearchResultsState {
  results: SearchResult[];
  loading: boolean;
}

interface Person {
  name: string;
  status: string;
}

class SearchResults extends Component<SearchResultsProps, SearchResultsState> {
  state: SearchResultsState = {
    results: [],
    loading: false,
  };

  fetchData = (searchTerm: string) => {
    this.setState({ loading: true });
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const fetchedResults: Person[] = data.results.map((result: Person) => ({
          name: result.name,
          status: result.status,
        }));

        this.setState({ results: fetchedResults, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
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
    const { results, loading } = this.state;
    return (
      <div className="search-results">
        <h2>Search Results</h2>
        {loading ? (
          <Loader />
        ) : (
          results.map((result) => (
            <div className="result-item" key={result.name}>
              <h3>{result.name}</h3>
              <p>Status: {result.status}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default SearchResults;
