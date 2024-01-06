import React, { useState } from 'react'
import "./Cal.css";


const Cal = () => {
    const [ result,setResult]=useState("");
    //------------handleChange--------------
    const handleChange = (e) => {
        setResult(result.concat(e.target.value));
      };
    //---------------clear---------------
    const clearData=()=>{
        setResult("");
    };
    //---------------operator----------
    const calculate=()=>{
        setResult(eval(result));
    };
      return (
    <div className='calc'>
    <input type="text" placeholder="0" id="answer" onChange={(e)=>handleChange(e)}value={result}/>
    <input type="button" value="9" className='button' onClick={handleChange}/>
    <input type="button" value="8" className='button' onClick={handleChange}/>
    <input type="button" value="7" className='button' onClick={handleChange}/>
    <input type="button" value="6" className='button' onClick={handleChange}/>
    <input type="button" value="5" className='button' onClick={handleChange}/>
    <input type="button" value="4" className='button' onClick={handleChange}/>
    <input type="button" value="3" className='button' onClick={handleChange}/>
    <input type="button" value="2" className='button' onClick={handleChange}/>
    <input type="button" value="1" className='button' onClick={handleChange}/>
    <input type="button" value="0" className='button' onClick={handleChange}/>
    <input type="button" value="+" className='button' onClick={handleChange}/>
    <input type="button" value="-" className='button' onClick={handleChange}/>
    <input type="button" value="*" className='button' onClick={handleChange}/>
    <input type="button" value="/" className='button' onClick={handleChange}/>
    <input type="button" value="%" className='button' onClick={handleChange}/>
    <input type="button" value="." className='button' onClick={handleChange}/>
    <input type="button" value="=" className='button1' onClick={calculate}/>
    <input type="button" value="clear" className='button1' onClick={clearData}/>
    
    

      
    </div>
  )
}

export default Cal;
