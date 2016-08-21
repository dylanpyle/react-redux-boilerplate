import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/loader';

import selectCountry from '../../services/select-country';
import getCountryList from '../../redux/countries/actions/get-list';
import style from './style.css';

export class CountryListPage extends Component {
  componentWillMount() {
    if (!this.props.country) {
      this.props.getCountryList();
    }
  }

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    const country = this.props.country;

    if (!country) {
      return (<div>Country not found</div>);
    }

    return (
      <section className={style.countryPage}>
        <h1 className={style.title}>{country.name}</h1>
        <dl>
          <dt>Alternate Spellings:</dt>
          <dd>{country.altSpellings.join(', ')}</dd>
          <dt>Capital:</dt>
          <dd>{country.capital}</dd>
          <dt>Population:</dt>
          <dd>{country.population}</dd>
        </dl>
      </section>
    );
  }
}

CountryListPage.propTypes = {
  country: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  getCountryList: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  const countryCode = props.params.countryCode;

  return {
    isFetching: state.countries.isFetching,
    country: selectCountry(state, countryCode)
  };
}

const mapDispatchToProps = {
  getCountryList
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryListPage);
