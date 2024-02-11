import cls from './Counter.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';

export function Counter() {
  const [counter, setCounter] = useState<number>(0);

  function handleDecrease() {
    setCounter((v) => v - 1);
  }

  function handleIncrease() {
    setCounter((v) => v + 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div className={classNames(cls.Counter)}>
      <h1>Counter</h1>
      <p className={classNames(cls.CounterOutput)}>{counter}</p>
      <div className={classNames(cls.ButtonsContainer)}>
        <Button className={classNames(cls.RedButton)} onClick={handleDecrease} type={'button'}>
          Decrease
        </Button>
        <Button className={classNames(cls.GrayButton)} onClick={handleReset} type={'button'}>
          Reset
        </Button>
        <Button className={classNames(cls.GreenButton)} onClick={handleIncrease} type={'button'}>
          Increase
        </Button>
      </div>
    </div>
  );
}
