import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ReactElement } from 'react';
import { Counter } from 'widgets/Counter';

function App(): ReactElement {
  return (
    <div className={classNames('App')}>
      <Counter></Counter>
    </div>
  );
}

export default App;
