import { useState, useReducer } from 'react';

const reducer = (state, action) => {
   switch(action.type) {
      case 'add-task': 
         return {
            tasks: [
               ...state.tasks, 
               {
                  name: action.payload, 
                  isCompleted: false 
               },
            ],
         }
      case 'toggle-task':
         return {
            ...state,
            tasks: state.tasks.map((item, index) => index === action.payload ? {...item, isCompleted: !item.isCompleted} : item )
         }
      default: 
         return state;
   }
}

const Reducer = () => {
   const [state, dispatch] = useReducer(reducer, { tasks: [] });

   const [inputValue, setInputValue] = useState('');

   return(
      <div>
         <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}  
         />
         <button onClick={() => {
            dispatch({ type: 'add-task', payload: inputValue });
            setInputValue('');
            }}
         >
            Adicionar
         </button>

         {
            state.tasks.map((task, index) => (
               <p onClick={() => dispatch({ type: 'toggle-task', payload: index})}>{task.name}</p>
            ))
         }
      </div>
   );
}

export default Reducer;