import React, { useCallback, useEffect, useReducer } from 'react';
import ErrorModal from '../UI/ErrorModal';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [loading, error, identifier, data, extra, sendRequest, clear] =
    useHttp();

  useEffect(() => {
    if (!loading && !error && 'DELETE'.includes(identifier)) {
      dispatch({ type: identifier, id: extra });
    } else if (!loading && !error && 'ADD'.includes(identifier)) {
      dispatch({ type: identifier, ingredient: { id: data.name, ...extra } });
    }
  }, [loading, error, data, extra, identifier]);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        'https://react-hooks-update.firebase.com/ingredients.json',
        'POST',
        JSON.stringify(ingredient),
        extra,
        'ADD'
      );
    },
    [sendRequest, extra]
  );

  const removeIngredientHandler = useCallback(
    (id) => {
      sendRequest(
        `https://react-hooks-update.firebase.com/ingredients/${id}.json`,
        'DELETE',
        null,
        id,
        'DELETE'
      );
    },
    [sendRequest]
  );

  const filteredIngredientsHandler = useCallback((ingredients) => {
    dispatch({ type: 'SET', ingredients });
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={loading}
      />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
