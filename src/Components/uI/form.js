import { useRef, useState } from 'react';
import classes from './form.module.css';
import Input from './input';

const Form = ({ onAddToCart }) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;

    if (enteredAmount.trim().length === 0 || +enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(+enteredAmount);

    amountRef.current.value = '1';
    setAmountIsValid(true);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
          ref={amountRef}
          input={{
            id: 'amount',
            type: 'number',
            step: '1',
            min:'1',
            defaultValue:'1'
          }}
          label="Amount"
        />
        <button>+ Add</button>
        {!amountIsValid && <div>enter proper amount</div>}
      </form>
    </div>
  );
};

export default Form;
