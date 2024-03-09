import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = () => {

  const [params, setParams] = useSearchParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const region = evt.target.region.value; 
    
    setParams({query: region});
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
  <button className={styles.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <select
    aria-label="select"
    className={styles.select}
    name="region"
    required
    defaultValue={params.get('query') || 'default'}
  >
    <option disabled value="default">
      Select a region
    </option>
    {regions.map(({id, value, name}) => 
      <option key={id} value={value}>{name}</option>)}
  </select>
</form>
  );
};
