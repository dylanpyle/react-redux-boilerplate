export default function selectCountry(state, code) {
  return state.countries.data[code] || null;
}
