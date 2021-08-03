function Word(props)
{
    const missing = props.missing;
    console.log(props);
    if(missing)
    {

        return <input type="text"   maxlength="1" placeholder="_"  style="width: 2ch"/>
        
    }
    else
    {
        return  <input type="text" readonly	 value={props.wordValue}  maxlength="1" style='width: 2ch; border: none ; outline-width: 0' />

    }
}
export default Word;