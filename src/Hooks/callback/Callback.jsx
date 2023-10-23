import { useState, useCallback } from "react";

import List from "./List";

const Callback = () => {
   const [text, setText] = useState('');
   const [resourceType, setResourceType] = useState('posts');

   const getItems = useCallback(async () => {
      console.log('getItem is being called!');

      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);

      const responseJSON = await response.json();

      return responseJSON;
   }, [resourceType])

   return (
      <div>
         <input  
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         <button onClick={() => setResourceType('posts')}>Posts</button>
         <button onClick={() => setResourceType('comments')}>Comments</button>
         <button onClick={() => setResourceType('todos')}>All</button>

         <List getItems={getItems} />
      </div>
   );
}

export default Callback;