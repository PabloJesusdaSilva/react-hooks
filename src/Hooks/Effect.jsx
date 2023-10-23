import { useState, useEffect } from "react";

const Effect = () => {
   const [items, setItems] = useState([]);
   const [resourceType, setResourceType] = useState('posts');

   const changeResourceType = (resourceType) => {
      setResourceType(resourceType);
   }

   useEffect(() => {
      const fetchResourceTypes = async () => {
         const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
         const responseJSON = await response.json();

         setItems(responseJSON);
      }

      fetchResourceTypes();
   }, [resourceType]);

   return (
      <div>
         <h1>{resourceType}</h1>
         <div>
            <button onClick={() => changeResourceType('posts')}>Posts</button>
            <button onClick={() => changeResourceType('comments')}>Comments</button>
            <button onClick={() => changeResourceType('todos')}>All</button>
         </div>
      </div>
   );
}

export default Effect