import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// write your Color component here
const Color = (props) => {
  console.log(props.color);
  const color = props.color
  const border = props.selectColor 
  const selectedColor = props.selectedColor
  console.log(selectedColor);
  const border1 = selectedColor === color ? "selected" : ""
  return (
   <div className = {`${color} ${border1}`} onClick={() =>{
      border(color);
    }
    }/>
  )
}


const Picker = () => {

  const [selectedColor, setSelectedColor] = useState('');

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color selectedColor = {selectedColor}color ='blue' selectColor={selectColor}/>
      <Color selectedColor = {selectedColor}color ='black' selectColor={selectColor}/>
      <Color selectedColor = {selectedColor}color ='violet' selectColor={selectColor}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);