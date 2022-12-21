import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../feature/counter/couterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.count)
  const incrementValue = Number(incrementAmount) || 0;
  console.log(incrementValue);

  return (
    <div>
      <div className={styles.row}>
        <button 
          className={styles.button} 
          onClick={()=>dispatch(decrement())} 
          aria-label="Decrement value">-</button>
        
        <span className={styles.value}>{count}</span>

        <button 
          className={styles.button} 
          onClick={()=>dispatch(increment())} 
          aria-label="Increment value">+</button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button}>Add Amount</button>
        <button className={styles.asyncButton}>Add Async</button>
        <button className={styles.button}>Add If Odd</button>
      </div>
    </div>
  );
}
