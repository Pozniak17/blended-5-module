import { Link } from 'react-router-dom';
import { Grid, GridItem } from '../index';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag, country, capital }) => (
        <GridItem key={id}>
          <Link to={`/country/${id.toLowerCase()}`}>
            <img src={flag} alt={country} />
            <p style={{ textAlign: 'center', color: 'wheat' }}>{capital[0]}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
