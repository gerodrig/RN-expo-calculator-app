import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0');
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
   if(lastOperation.current){
    const firstFormulaPart = formula.split(' ')[0];
    setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
   } else {
    setFormula(number);
   }
  }, [number])
  

  useEffect(() => {
    //? Calculate subtotal
    const subTotal = calculateSubTotal();
    setPreviousNumber(subTotal.toString());
  
    // setFormula(number);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    setFormula('0');

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if(number.includes('-')){
        setNumber(number.replace('-', ''));
    } else {
        setNumber(`-${number}`);
    }
  }

  const deleteLastCharacter = () => {
    let currentSign = '';
    let temporaryNumber = number;

    if(number.includes('-')){
        currentSign = '-';
        temporaryNumber = number.substring(1);
    }

    if(temporaryNumber.length > 1){
        return setNumber(currentSign + temporaryNumber.slice(0, -1));
    }

    setNumber('0');
}

const setLastNumber = () => {
    calculateTotal();

    if(number.endsWith('.')){
        setPreviousNumber(number.slice(0, -1));
    }

    setPreviousNumber(number);
    setNumber('0');
};

const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
}

const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
}

const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
}

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };


  const calculateSubTotal = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if(isNaN(num2)) return num1;

    switch (operation) {
        case Operator.add:
            return num1 + num2;
        case Operator.subtract:
            return num1 - num2;
        case Operator.multiply:
            return num1 * num2;
        case Operator.divide:
            return num1 / num2;
    
        default:
            throw new Error('Invalid operation');
    }
  };

  const calculateTotal = () => {
    const total = calculateSubTotal();
    setFormula(`${total}`);

    lastOperation.current = undefined;
    setPreviousNumber('0');
  }
  

  const buildNumber = (numberString: string) => {
    //? Verify if therei is a dot
    if (number.includes('.') && numberString === '.') return;

    //? Verify if there is a 0
    if(number.startsWith('0') || number.startsWith('-0')){
        if(numberString === '.'){
            return setNumber(number + numberString);
        }

        //? Evaluate if it is different from 0 and there is no dot
        if(numberString === '0' && number.includes('.')){
            return setNumber(number + numberString);
        }

        //? Evaluate if it is different from 0 and there is no dot
        if(numberString !== '0' && !number.includes('.')){
            return setNumber(numberString);
        }

        //? Avoid 0000.0
        if(numberString === '0' && !number.includes('.')){
            return;
        }
    }

    setNumber( number + numberString );
  };

  return {
    //* Props
    formula,
    number,
    previousNumber,

    //* Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLastCharacter,

    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubTotal,

    calculateTotal,
  }
};
