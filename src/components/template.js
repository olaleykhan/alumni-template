import React from 'react';
import Card from './card';

// import classes from './BuildControl.css';



const template = ({name,description,link}) => (
    
    
   <Card cardClasses="mx-8  rounded my-4">

       {/* {console.log(category,created,description,link,name)} */}

       

       <div className="flex flex-col h-full  justify-between ...">
      <h1 className="font-bold text-2xl p-5">{name}</h1>

      {/* {/* <p>{created}</p> */}
      <p className="p-5">{description}</p>
      {/* <p>{link}</p> */}

      <a href={link} target="_blank" className="text-green-400 bg-gray-50 py-2 px-4 fonts"> Use Template </a>
   </div>
   </Card>
);

export default template;