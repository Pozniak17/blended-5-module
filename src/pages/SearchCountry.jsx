import { Container, CountryList, Error, Heading, Loader, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();

  const query = params.get('query');
  console.log(query);

  useEffect(() => {
    if (!query) {
      return
    }
    async function fetchCountries() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchByRegion(query);
        setCountries(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  },[query]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        < SearchForm/>
        <CountryList countries={countries} />
        {loading && <Loader />}
        {error && <Error />}
      </Container>
    </Section>
  );
};
