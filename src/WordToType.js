import { useState } from "react";

const  WordToType = (props) =>
{
    const [ wordWithBlanks, setWordWithBlanks ] = useState('');
    const handleChange = (e) => {
        // parent class change handler is always called with field name and value
        setWordWithBlanks(e.target.value);
    }
        console.log(props);
        return ( <input type="text" value={wordWithBlanks} onChange={handleChange} name="wordWithBlanks"  />)        
//    return ( <input type="text" value={props.wordWithBlanks} onChange={props.onChange} name="wordWithBlanks"  />)

}
export default WordToType;