function Word(props)
{
    const { missing, wordValue} = props;
    
    if(missing)
    {

        return <input type="text"   maxLength="1" placeholder="_"  style={{width: "2ch"}}/>
        
    }
    else
    {
        return  <input type="text" readonly	 value={wordValue}  maxlength="1" style={{width: "2ch", border: "none"}} />

    }
}
export default Word;