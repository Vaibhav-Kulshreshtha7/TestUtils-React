import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleCaClick = ()=>{
    let newText = text.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    setText(newText);
    props.showAlert("Text is converted to Capitalized!", "success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleRepeatClick = ()=>{
    let newText = text.repeat(2);
    setText(newText);
    props.showAlert("Repeated the text!", "success");
  }
  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
    // document.getSelection().removeAllRanges();
    // let newText = text;
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // Wrong way to change the state
  // text = "new text here";

  // Correct way to change the state
  // setText("new text here");

  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'#042743':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'#042743':'white'}} id="myBox" rows="7"></textarea> 
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCaClick}>Convert to Capitalized</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleRepeatClick}>Repeat Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.trim().split(" ").filter(word => word !== "").length} words, and {text.length} characters</p>
      <p>Approximately {0.008 * text.trim().split(" ").filter(word => word !== "").length} Minutes to read.</p>
      <h2>Preview</h2>
      <p>{text.length>0? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
