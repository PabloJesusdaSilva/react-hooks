import { useLayoutEffect, useState } from 'react';

import Modal from './Modal';

const LayoutEffect = () => {
   const [count, setCount] = useState(1);

   useLayoutEffect(() => {
      console.log(count);
   }, [count]);
   
   return (
      <>
         <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>
               Increment
            </button>
         </div> <br />

         <Modal />
      </>
   );
}

export default LayoutEffect;