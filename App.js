import React from 'react';
import Charity from './Charity';
import Donations from './Donations';
import { charity } from './config';
import { getCharityDonations } from './api';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      donations: null,
      error: null
    };

    this.loadDonations = this.loadDonations.bind(this);
  }

  loadDonations() {
    this.setState({ isLoading: true });

    getCharityDonations()
      .then(donations => { this.setState({ isLoading: false, donations }) })
      .catch(error => { this.setState({ isLoading: false, error }) })
  }

  render() {
    const { isLoading, donations, error } = this.state;

    if (error) {
      return (
        <pre className="error">{ error.toString() }</pre>
      )
    }

    const content = donations ? <Donations donations={donations} /> : <button onClick={this.loadDonations}>Load Donations</button>

    return (
      <div>
        <Charity {...charity} />
        {
          isLoading
          ? <div>Loading&hellip;</div>
          : content
        }
      </div>
    )
  }
}

export default App;
