import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetWord: '',
      totalCharsToHide: 1,
      wordAtArray: [],
      wordWithBlanks: '',
      isRight: undefined
    };
  }
  /*
  const [formGeneratedWord, setFormGeneratedWord] = useState(blankFormGeneratedWord);
  const [wordAtArray, setWordAtArray] = useState([]);
  */
  verifyHangman = () => {
    /*
    const wordWithBlanksSplitted = this.state.wordWithBlanks.split('');
    const targetWordSplitted = this.state.targetWord.split('');

    let word = [];
    targetWordSplitted.forEach((letter, index)=> {
      if (wordWithBlanksSplitted[index] === letter) {
        word.push(letter);
        this.setState({isRight: true})
      } else {
        word.push("_");
      }
    })
    this.setState({ wordAtArray: word.join('') });
    // if (targetWordSplitted.includes(this.state.wordWithBlanks)) {
      
      // this.setState({ wordAtArray: targetWordSplitted})
    // }
    */
    this.setState({isRight: (this.state.wordWithBlanks === this.state.targetWord)})
  };
  generateIncompleteWord = () => {
    let indexesToHide = [];
    const max = this.state.targetWord.length;
    while (
      indexesToHide.length < Number.parseInt(this.state.totalCharsToHide)
    ) {
      let randomIndex = Math.floor(Math.random() * max);
      if (indexesToHide.indexOf(randomIndex) === -1) {
        indexesToHide.push(randomIndex);
      }
    }
    let generatedWordWithBlanks = this.state.targetWord.split('');
    indexesToHide.forEach((idx) => {
      generatedWordWithBlanks[idx] = '_';
    });
    this.setState({ wordAtArray: generatedWordWithBlanks });
  };
  /*
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormGeneratedWord({ ...formGeneratedWord, [name]: value });
  };
  */
  onChange = (e) => {
    // parent class change handler is always called with field name and value
    this.setState({ [e.target.name]: e.target.value });
  };

  onWordToTypeChange = (e) => {
    // parent class change handler is always called with field name and value
    this.setState({ typedWord: e.target.value });
  };

  handleChange = (e) => {
    // parent class change handler is always called with field name and value
    this.setState({ wordWithBlanks: e.target.value})
}

  render() {
    return (
      <div className='App'>

        {/* Palavra a ser gerada */}
        <input
          type='text'
          name='targetWord'
          onChange={this.onChange.bind(this)}
          value={this.state.targetWord}
        ></input>

        {/* Quantidade de caracteres */}
        <input
          type='number'
          name='totalCharsToHide'
          onChange={this.onChange.bind(this)}
          value={this.state.totalCharsToHide}
        ></input>
        <button onClick={this.generateIncompleteWord}>Gerar palavra</button>
        <div className='Word'>

          {/* Palavra a ser adivinhada */}
          <input type="text" readOnly	 value={this.state.isRight ? this.state.wordAtArray : this.state.wordAtArray.join('')} style={{ border: "none"}}/>

          {/* Palavra que o usuário acha que é a correta */}
          <input type="text" value={this.wordWithBlanks} onChange={this.handleChange.bind(this)} name="wordWithBlanks"  />
          <button onClick={this.verifyHangman}>Verificar</button>
          { this.state.isRight !== undefined ? 
            <input type="text" id="result" name="result" value={this.state.isRight ? "Correto" : "Errado"} readonly style={{ border: "none"}}/>
            :
            null
          }
          
        </div>
      </div>
    );
  }
}

export default App;
