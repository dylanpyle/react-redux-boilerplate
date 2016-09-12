import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Loader from '../../components/loader';

import selectCountry from '../../services/select-country';
import getCountryList from '../../redux/countries/actions/get-list';
import style from './style.css';

function renderCountry(country) {
  const code = country.alpha2Code;

  return (
    <li key={code}>
      <Link to={`/countries/${code}`}>
        {country.name}
      </Link>
    </li>
  );
}

class CountryListPage extends Component {
  componentWillMount() {
    this.props.getCountryList();
  }

  render() {
    if (this.props.isFetching) {
      return <Loader />;
    }

    return (
      <section className={style.countryListPage}>
        <h1 className={style.title}>Choose a country to learn more:</h1>
        <ul>
          {this.props.countries.map(renderCountry)}
        </ul>
      </section>
    );
  }

}

CountryListPage.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      alpha2Code: PropTypes.string.isRequired
    })
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getCountryList: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isFetching: state.countries.isFetching,
    countries: state.countries.countryCodes.map(selectCountry.bind(null, state))
  };
}

const mapDispatchToProps = {
  getCountryList
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryListPage);
