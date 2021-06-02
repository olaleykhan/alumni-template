import React from 'react';

// import classes from './BuildControl.css';

const card = (props) => (
   <div className={`shadow  h-60 ${props.cardClasses}`}>
       {props.children}
   </div>
);

export default card;