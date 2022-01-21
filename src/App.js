import React from 'react';
import Card from './ui/Card';
import Select from './components/Js/Select';
import Text from './components/Js/Text';
import Input from './components/Js/Input';
import Button from './components/Js/Button';

function App() {
  return (
    <Card>
      <Select />
      <Input />
      <Text />
      <Button />
    </Card>
  );
}

export default App;
