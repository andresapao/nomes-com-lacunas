function Word(props)
{
    const missing = props.missing;
    console.log(props);
    if(missing)
    {

        return <input type="text"   maxLength="1" placeholder="_"  />
        
    }
    else
    {
        return  <input type="text" readonly	 value={props.wordValue}  maxlength="1"  />

    }
}
export default Word;