
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = amount => cartCtx.addItem({
    id, name, amount, price
  });

  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
