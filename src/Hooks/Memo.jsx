import { useMemo, useState } from "react";

const Memo = () => {
   const [number, setNumber] = useState(1);
   const [text, setText] = useState('');

   const doubleNumber = useMemo(() => {
      return slowFunction(number);
   }, [number])
   return(
      <>
         <p>{number}</p>
         <input
            value={text}
            onChange={(e) => {setText(e.target.value)}} 
         />
         <button onClick={() => setNumber(2)}>Increment</button>
         <p>Text: {text}</p>
      </>
   );
}

const slowFunction = (num) => {
   console.log('Slow function is eing called');

   for (let i = 0; i <= 1000; i++) {}

   return num + 2;
}

export default Memo