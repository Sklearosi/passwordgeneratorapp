
import { useState } from 'react'
import './App.css'





function App() {
  const [difficulty, setDifficulty] = useState(0)
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")
  const [colortwo, setColortwo] = useState()
  const [colorthree, setColorthree] = useState()
  const [colorfour, setColorfour] = useState()
  const [difText, setDifText] = useState("")
  const [num, setNum] = useState("")
  const [justLetters, setJustLetters] = useState("")
  const [uppercaseLetters, setUppercaseLetters] = useState("")
  const [addSymbols, setSymbols] = useState("")
  const [addNumbers, setNumbers] = useState("")
  const handleRangeChange = (e) => {


    setCount(e.target.value)
    setNum(e.target.value)
    let value = e.target.value 
    if(value < 4) {
      setColor("transparent")
      setColorthree("transparent")
      setColortwo("transparent")
      setColorfour("transparent")
      setDifText("MORE THAN 3!")
    }

    if(value >=4 && difficulty === 0) {
      setColor("red")
      setDifText("TOO WEAK!")
      setColortwo("transparent")
      setColorthree("transparent")
      setColorfour("transparent")
    } else if (value >=4 && difficulty === 1) {
      setColor("orange")
      setDifText("WEAK")
      setColortwo("orange")
      setColorthree("transparent")
      setColorfour("transparent")
    } else if (value >=4 && difficulty === 2) {
      setColor("yellow")
      setDifText("MEDIUM")
      setColortwo("yellow")
      setColorthree("yellow")
      setColorfour("transparent")
    } else if (value >=4 && difficulty === 3) {
      setColor("yellow")
      setDifText("MEDIUM")
      setColortwo("yellow")
      setColorthree("yellow")
      setColorfour("transparent")
    } else if (value >=4 && difficulty === 4) {
      setColor("#A4FFAF")
      setDifText("STRONG")
      setColortwo("#A4FFAF")
      setColorthree("#A4FFAF")
      setColorfour("#A4FFAF")
    } 

    
console.log(difficulty);

  }

  
  
let changeOne = (e) => {
if(e.target.checked) {
  setDifficulty(difficulty + 1)
  setUppercaseLetters("uppercase")
  if(num < 4) {
    setColor("transparent")
    setColorthree("transparent")
    setColortwo("transparent")
    setColorfour("transparent")
    setDifText("MORE THAN 3!")
  }

   if (num >=4 && difficulty === 0) {
    setColor("orange")
    setDifText("WEAK")
    setColortwo("orange")
    setColorthree("transparent")
    setColorfour("transparent")
  } else if (num >=4 && difficulty === 1) {
    setColor("yellow")
    setDifText("MEDIUM")
    setColortwo("yellow")
    setColorthree("yellow")
    setColorfour("transparent")
  } else if (num >=4 && difficulty === 2) {
    setColor("yellow")
    setDifText("MEDIUM")
    setColortwo("yellow")
    setColorthree("yellow")
    setColorfour("transparent")
  } else if (num >=4 && difficulty === 3) {
    setColor("#A4FFAF")
    setDifText("STRONG")
    setColortwo("#A4FFAF")
    setColorthree("#A4FFAF")
    setColorfour("#A4FFAF")
  } 
} else {
  setUppercaseLetters("")
  setDifficulty(difficulty - 1)
  if(num < 4) {
    setColor("transparent")
    setColorthree("transparent")
    setColortwo("transparent")
    setColorfour("transparent")
    setDifText("MORE THAN 3!")
  }

  if(num >=4 && difficulty === 1) {
    setColor("red")
    setDifText("TOO WEAK!")
    setColortwo("transparent")
    setColorthree("transparent")
    setColorfour("transparent")
  } else if (num >=4 && difficulty === 2) {
    setColor("orange")
    setDifText("WEAK")
    setColortwo("orange")
    setColorthree("transparent")
    setColorfour("transparent")
  } else if (num >=4 && difficulty === 3) {
    setColor("yellow")
    setDifText("MEDIUM")
    setColortwo("yellow")
    setColorthree("yellow")
    setColorfour("transparent")
  } else if (num >=4 && difficulty === 4) {
    setColor("yellow")
    setDifText("MEDIUM")
    setColortwo("yellow")
    setColorthree("yellow")
    setColorfour("transparent")
  } 
}




}

const changeTwo = (e) => {
  if(e.target.checked) {
    setJustLetters("justletters")
    setDifficulty(difficulty + 1)
    if(num < 4) {
      setColor("transparent")
      setColorthree("transparent")
      setColortwo("transparent")
      setColorfour("transparent")
      setDifText("MORE THAN 3!")
    }
  
     if (num >=4 && difficulty === 0) {
      setColor("orange")
      setDifText("WEAK")
      setColortwo("orange")
      setColorthree("transparent")
      setColorfour("transparent")
    } else if (num >=4 && difficulty === 1) {
      setColor("yellow")
      setDifText("MEDIUM")
      setColortwo("yellow")
      setColorthree("yellow")
      setColorfour("transparent")
    } else if (num >=4 && difficulty === 2) {
      setColor("yellow")
      setDifText("MEDIUM")
      setColortwo("yellow")
      setColorthree("yellow")
      setColorfour("transparent")
    } else if (num >=4 && difficulty === 3) {
      setColor("#A4FFAF")
      setDifText("STRONG")
      setColortwo("#A4FFAF")
      setColorthree("#A4FFAF")
      setColorfour("#A4FFAF")
    } 
  } else {
    setJustLetters("")
    setDifficulty(difficulty - 1)
    if(num < 4) {
      setColor("transparent")
      setColorthree("transparent")
      setColortwo("transparent")
      setColorfour("transparent")
      setDifText("MORE THAN 3!")
    }
  
    if(num >=4 && difficulty === 1) {
      setColor("red")
      setDifText("TOO WEAK!")
      setColortwo("transparent")
      setColorthree("transparent")
      setColorfour("transparent")
    } else if (num >=4 && difficulty === 2) {
      setColor("orange")
      setDifText("WEAK")
      setColortwo("orange")
      setColorthree("transparent")
      setColorfour("transparent")
    } else if (num >=4 && difficulty === 3) {
      setColor("yellow")
      setDifText("MEDIUM")
      setColortwo("yellow")
      setColorthree("yellow")
      setColorfour("transparent")
    } else if (num >=4 && difficulty === 4) {
      setColor("yellow")
      setDifText("MEDIUM")
      setColortwo("yellow")
      setColorthree("yellow")
      setColorfour("transparent")
    } 
  }
  }

  const changeThree = (e) => {
    if(e.target.checked) {
      setNumbers("addnumbers")
      setDifficulty(difficulty + 1)
      if(num < 4) {
        setColor("transparent")
        setColorthree("transparent")
        setColortwo("transparent")
        setColorfour("transparent")
        setDifText("MORE THAN 3!")
      }
    
       if (num >=4 && difficulty === 0) {
        setColor("orange")
        setDifText("WEAK")
        setColortwo("orange")
        setColorthree("transparent")
        setColorfour("transparent")
      } else if (num >=4 && difficulty === 1) {
        setColor("yellow")
        setDifText("MEDIUM")
        setColortwo("yellow")
        setColorthree("yellow")
        setColorfour("transparent")
      } else if (num >=4 && difficulty === 2) {
        setColor("yellow")
        setDifText("MEDIUM")
        setColortwo("yellow")
        setColorthree("yellow")
        setColorfour("transparent")
      } else if (num >=4 && difficulty === 3) {
        setColor("#A4FFAF")
        setDifText("STRONG")
        setColortwo("#A4FFAF")
        setColorthree("#A4FFAF")
        setColorfour("#A4FFAF")
      } 
    } else {
      setNumbers("")
      setDifficulty(difficulty - 1)
      if(num < 4) {
        setColor("transparent")
        setColorthree("transparent")
        setColortwo("transparent")
        setColorfour("transparent")
        setDifText("MORE THAN 3!")
      }
    
      if(num >=4 && difficulty === 1) {
        setColor("red")
        setDifText("TOO WEAK!")
        setColortwo("transparent")
        setColorthree("transparent")
        setColorfour("transparent")
      } else if (num >=4 && difficulty === 2) {
        setColor("orange")
        setDifText("WEAK")
        setColortwo("orange")
        setColorthree("transparent")
        setColorfour("transparent")
      } else if (num >=4 && difficulty === 3) {
        setColor("yellow")
        setDifText("MEDIUM")
        setColortwo("yellow")
        setColorthree("yellow")
        setColorfour("transparent")
      } else if (num >=4 && difficulty === 4) {
        setColor("yellow")
        setDifText("MEDIUM")
        setColortwo("yellow")
        setColorthree("yellow")
        setColorfour("transparent")
      } 
    }
    }

    const changeFour = (e) => {
      if(e.target.checked) {
        setSymbols("symbols")
        setDifficulty(difficulty + 1)
        if(num < 4) {
          setColor("transparent")
          setColorthree("transparent")
          setColortwo("transparent")
          setColorfour("transparent")
          setDifText("MORE THAN 3!")
        }
      
         if (num >=4 && difficulty === 0) {
          setColor("orange")
          setDifText("WEAK")
          setColortwo("orange")
          setColorthree("transparent")
          setColorfour("transparent")
        } else if (num >=4 && difficulty === 1) {
          setColor("yellow")
          setDifText("MEDIUM")
          setColortwo("yellow")
          setColorthree("yellow")
          setColorfour("transparent")
        } else if (num >=4 && difficulty === 2) {
          setColor("yellow")
          setDifText("MEDIUM")
          setColortwo("yellow")
          setColorthree("yellow")
          setColorfour("transparent")
        } else if (num >=4 && difficulty === 3) {
          setColor("#A4FFAF")
          setDifText("STRONG")
          setColortwo("#A4FFAF")
          setColorthree("#A4FFAF")
          setColorfour("#A4FFAF")
        } 
      } else {
        setSymbols("")
        setDifficulty(difficulty - 1)
        if(num < 4) {
          setColor("transparent")
          setColorthree("transparent")
          setColortwo("transparent")
          setColorfour("transparent")
          setDifText("MORE THAN 3!")
        }
      
        if(num >=4 && difficulty === 1) {
          setColor("red")
          setDifText("TOO WEAK!")
          setColortwo("transparent")
          setColorthree("transparent")
          setColorfour("transparent")
        } else if (num >=4 && difficulty === 2) {
          setColor("orange")
          setDifText("WEAK")
          setColortwo("orange")
          setColorthree("transparent")
          setColorfour("transparent")
        } else if (num >=4 && difficulty === 3) {
          setColor("yellow")
          setDifText("MEDIUM")
          setColortwo("yellow")
          setColorthree("yellow")
          setColorfour("transparent")
        } else if (num >=4 && difficulty === 4) {
          setColor("yellow")
          setDifText("MEDIUM")
          setColortwo("yellow")
          setColorthree("yellow")
          setColorfour("transparent")
        } 
      }
      }
      
  
      const [password, setPassword] = useState("")

    
      const generate = () => {
        if(count >= 4 ) {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()-_=+[{]}|;:',<.>/?";
      
        let charSet = "";
        let word = "";
        let remainingLength = parseInt(count);
      
        
        if (justLetters) {
          charSet += uppercaseChars + lowercaseChars;
          word += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
          word += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
          remainingLength -= 2;
        } else {
          if (uppercaseLetters) {
            charSet += uppercaseChars;
            word += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
            remainingLength--;
          }
          if (num) {
            charSet += lowercaseChars;
            word += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
            remainingLength--;
          }
        }
      
        if (addNumbers && remainingLength > 0) {
          charSet += numbers;
          word += numbers.charAt(Math.floor(Math.random() * numbers.length));
          remainingLength--;
        }
      
        if (addSymbols && remainingLength > 0) {
          charSet += symbols;
          word += symbols.charAt(Math.floor(Math.random() * symbols.length));
          remainingLength--;
        }
      
        
        for (let i = 0; i < remainingLength; i++) {
          const randomIndex = Math.floor(Math.random() * charSet.length);
          word += charSet.charAt(randomIndex);
        }
      
        
        const shuffledword = word.split('').sort(() => Math.random() - 0.5).join('');
      
        setPassword(shuffledword)
        console.log(shuffledword);
      } else {
        setDifText("MORE THAN 3!")
      }
      };

      const [copied, setCopied] = useState("")

      const copyPassword = () => {
        navigator.clipboard.writeText(password)
        let interval = 0
      const removeMessage =  setInterval((something) => {
          interval++
          console.log(interval);
          if(interval > 3) {
            setCopied("")
            clearInterval(removeMessage)
          }
        }, 1000);
        
       
        setCopied("COPIED")
      }

  return (
    <>
    <div className="center-container">
      <div className='container'>
        <p className='appName'>Password Generator</p>
        <div className='heading'>
          <p className='wordP'>{password}</p>
          <div className='rightSide'>
          <p className="copied">{copied}</p>
          <img className='copy' onClick={copyPassword} src="/assets/icon-copy.svg" alt="" srcSet="" />
          </div>
        </div>
        <div className='mainContent'>
          <div className="length">
            <p>Character Lenght</p>
            <p className='characterLength'>{count}</p>
          </div>
          <input onChange={handleRangeChange} className='rangeInput' type="range" min={0} max={10} value={count} />
          <div className="checkers">
          <div className='checkboxes'><input  onChange={changeOne} className='checkbox' type="checkbox"  /><p>Include Uppercase Letters</p></div>
          <div className='checkboxes'><input onChange={changeTwo} className='checkbox' type="checkbox" /><p>Include Lowercase Letters</p></div>
          <div className='checkboxes'><input onChange={changeThree} className='checkbox' type="checkbox" /><p>Include Numbers</p></div>
          <div className='checkboxes'><input onChange={changeFour} className='checkbox' type="checkbox" /><p>Include Symbols</p></div>
          </div>
          <div className="strength">
            <p className='strength-p'>STRENGTH</p>
            <div className="power"><p>{difText}</p>
            <div className="coloredRectDiv">
              <div className="coloredRect" style={{backgroundColor: color}}></div>
              <div className="coloredRect" style={{backgroundColor: colortwo}} ></div>
              <div className="coloredRect" style={{backgroundColor: colorthree}}></div>
              <div className="coloredRect" style={{backgroundColor: colorfour}}></div>
            </div>
            </div>
          </div>
          <button onClick={generate} className="generate"><p>GENERATE</p> <img src="/assets/icon-arrow-right.svg" alt="" /></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
