
import React, {  useState } from "react";
import './App.css';
import Word from "./Word.js";
import WordToType from "./WordToType";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  
    {
      targetWord: '',
      totalCharsToHide: 1,
      wordAtArray : []
    };
  }
/*
  const [formGeneratedWord, setFormGeneratedWord] = useState(blankFormGeneratedWord);
  const [wordAtArray, setWordAtArray] = useState([]);
  */
  verifyHangman = () =>
  {
    console.log(this.state.targetWord === this.state.wordAtArray.join(''));
    return this.state.targetWord === this.state.wordAtArray.join('');
  }
  generateIncompleteWord = () =>
  {
    let indexesToHide = [];
    const max = this.state.targetWord.length;
    while(indexesToHide.length < Number.parseInt(this.state.totalCharsToHide))
    {
      let randomIndex = Math.floor( Math.random() * max );
      if(indexesToHide.indexOf(randomIndex)  === -1)
      {
        indexesToHide.push(randomIndex);
      }
    }
    let generatedWordWithBlanks = this.state.targetWord.split('');
    indexesToHide.forEach(idx => {
      generatedWordWithBlanks[idx] = '_';
    })
    console.log(generatedWordWithBlanks);
    this.setState({wordAtArray  : generatedWordWithBlanks});

  }
  /*
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormGeneratedWord({ ...formGeneratedWord, [name]: value });
  };
  */  
  onChange = (e) => {
    // parent class change handler is always called with field name and value
    this.setState({[e.target.name]: e.target.value});
}

  render()
  {
    return (
      <div className="App">
          <input type="text" name="targetWord" onChange={this.onChange.bind(this)} value={this.state.targetWord}></input>
          <input type="number" name="totalCharsToHide" onChange={this.onChange.bind(this)} value={this.state.totalCharsToHide}></input>
          <button onClick={this.generateIncompleteWord}>Gerar palavra</button>
          <div className="Word">

            <Word wordValue={this.state.wordAtArray.join('')} />            
            <WordToType wordWithBlanks={""} onChange={this.onChange} /> 
            <button onClick={this.verifyHangman}>Verificar</button>                                     
          </div>        

      </div>
    
    );
  }
}

export default App;
