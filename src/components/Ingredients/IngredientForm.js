import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(({ onAddIngredient, loading }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    onAddIngredient({ title, amount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
          {loading && <LoadingIndicator />}
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
