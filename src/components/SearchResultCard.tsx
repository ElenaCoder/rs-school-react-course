import React, { Component } from 'react';
import './SearchResultCard.css';

interface SearchResultCardProps {
  name: string;
  status: string;
}

class SearchResultCard extends Component<SearchResultCardProps> {
  render() {
    const { name, status } = this.props;

    return (
      <div className="result-item">
        <h3>{name}</h3>
        <p>Status: {status}</p>
      </div>
    );
  }
}

export default SearchResultCard;
