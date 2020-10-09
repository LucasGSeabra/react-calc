import React, { useState } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';
import Operate from '../utils/Operate/Operate';

import './styles.css';

function Calc() {

    const [display, setDisplay] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState('');
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    function clearMemory() {
        setDisplay('0');
        setClearDisplay(false);
        setOperation('');
        setValues([0, 0]);
        setCurrent(0);
    }

    function operate() {
        if(current === 0) {
            setCurrent(1);
            setClearDisplay(true);
            setOperation(n);
        } else {
            const equals = operation === '=';
            const currentOperation = operation;

            let val = [...values];
            try {
                val[0] = Operate(val[0], val[1], currentOperation);               
            } catch {
                val[0] = values[0];
                
            }
            val[1] = 0;

            setDisplay(val[0]);
            setOperation( equals ? null : operation);
            setCurrent(equals ? 0 : 1);
            setClearDisplay(!equals);
            setValues([...val]);
        }
    }

    function type(n) {
        const dot = display;
        if(n === '.' && dot.includes('.')) {
            return
        }
        const clear = display === '0'
            || clearDisplay;        
        const currentValue = clear ? '' : display;
        const displayValue = currentValue + n;
        setDisplay(displayValue);
        setClearDisplay(false);

        if (n !== '.') {
            const i = current;
            const newValue = parseFloat(displayValue);
            let val = [...values];
            val[i] = newValue;
           setValues([...val]);
        }
    }

    return (
        <div className="calc">
            <Display value={display} />
            <Button label="AC" click={clearMemory} triple/>
            <Button label="/" click={operate} operation/>
            <Button label="7" click={type}/>
            <Button label="8" click={type}/>
            <Button label="9" click={type}/>
            <Button label="*" click={operate} operation/>
            <Button label="4" click={type}/>
            <Button label="5" click={type}/>
            <Button label="6" click={type}/>
            <Button label="-" click={operate} operation/>
            <Button label="1" click={type}/>
            <Button label="2" click={type}/>
            <Button label="3" click={type}/>
            <Button label="+" click={operate} operation/>
            <Button label="0" click={type} double/>
            <Button label="." click={type}/>
            <Button label="=" click={operate} operation/>
        </div>
    )
}

export default Calc
