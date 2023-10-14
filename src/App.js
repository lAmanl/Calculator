import React, {useState} from "react";
import './App.css';

function App() {
  const [out, setOut] = useState('');
  const op_char = ['*', '/', '-', '+', '='];

  const calc = (ipt) => {
    if(ipt === '=' && out !== ''){
      try{
        setOut(eval(out.replace('%', '/100')).toString());
      }
      catch(error){
        setOut('error');
      }
    }
    else if(ipt === 'DEL'){
      setOut(out.slice(0,-1));
    }
    else{
      if(out === '' && op_char.includes(ipt)) return;
      setOut(out + ipt);
    }

  }
  return (
    <div className="main">
      <input type="text" className="input" value={out} readOnly />
      <div className="input-btn">
        <button></button>
        <button></button>
        <button></button>
        <button className="op-btn" data-value="DEL" onClick={()=>calc("DEL")}>DEL</button>
        <button data-value="7" onClick={()=>calc("7")}>7</button>
        <button data-value="8" onClick={()=>calc("8")}>8</button>
        <button data-value="9" onClick={()=>calc("9")}>9</button>
        <button className="op-btn" data-value="/" onClick={()=>calc("/")}>/</button>
        <button data-value="4" onClick={()=>calc("4")}>4</button>
        <button data-value="5" onClick={()=>calc("5")}>5</button>
        <button data-value="6" onClick={()=>calc("6")}>6</button>
        <button className="op-btn" data-value="*" onClick={()=>calc("*")}>*</button>
        <button data-value="1" onClick={()=>calc("1")}>1</button>
        <button data-value="2" onClick={()=>calc("2")}>2</button>
        <button data-value="3" onClick={()=>calc("3")}>3</button>
        <button className="op-btn" data-value="-" onClick={()=>calc("-")}>-</button>
        <button data-value="0" onClick={()=>calc("0")}>0</button>
        <button data-value="." onClick={()=>calc(".")}>.</button>
        <button className="op-btn" data-value="=" onClick={()=>calc("=")}>=</button>
        <button className="op-btn" data-value="+" onClick={()=>calc("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
