import React, { FC } from 'react';
import './App.less';
import MyForm from './MyForm'
import MyAlert from './MyAlert'
import Test1 from './Test1'
import MyButton from './MyButton'

const App: FC = () => (
  <div className="App">
    <MyForm/>
    <MyAlert value="TypeScript"/>
    <MyButton name="点击次数"/>
  </div>
);

export default App;