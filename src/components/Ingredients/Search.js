import React, { useEffect, useRef, useState } from 'react';

import Card from '../UI/Card';
import './Search.css';
import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';

const Search = React.memo(({ onLoadIngredients }) => {
  const [filter, setFilter] = useState('');
  const inputRef = useRef();
  const [loading, data, error, sendRequest, clear] = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filter !== inputRef.current.value) return;
      const query =
        filter.length === 0 ? '' : `?orderBy="title"&equalTo="${filter}"`;
      sendRequest(
        'https://react-hooks-update.firebase.com/ingredients.json' + query,
        'GET'
      );
    }, 500);
    return () => clearTimeout(timer); // avoiding memory costs cleaning unnecessary timeouts
  }, [filter, inputRef, sendRequest]);

  useEffect(() => {
    if (loading || error || !data) return;

    const loadedIngredients = [];
    for (const key in data) {
      loadedIngredients.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
      });
    }
    onLoadIngredients(loadedIngredients);
  }, [data, loading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {loading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
