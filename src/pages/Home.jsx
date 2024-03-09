import {
  Container,
  CountryList,
  Heading,
  Loader,
  Section,
  Error,
} from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      try {
        setError(false);
        setLoading(true);
        const response = await getCountries();
        setCountry(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList countries={country} />
        {loading && <Loader />}
        {error && <Error />}
      </Container>
    </Section>
  );
};
