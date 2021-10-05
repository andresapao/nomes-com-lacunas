function Word(props)
{
    const { wordValue} = props;
    
    return  <input type="text" readonly	 value={wordValue} style={{ border: "none"}}/>

}
export default Word;