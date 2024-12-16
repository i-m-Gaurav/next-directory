import React from 'react'


// Here we are using the params to get the id from the 
// dynamic routing this is the typescript way of doing this.
const page = ({params} : {params : {id : string}}) => {

    // destructuring the id from the params, and later
    // using in the component.
    const { id } = params;
  return (
    <div>User Details : { id }</div>
  )
}

export default page