import React from 'react';


const Card = ({name, email, sirName, onclickEdit, showAlert, showAlert1}) =>{


    return <div >
            <h1>{name}</h1>
            <h2>{email}</h2>
           <button  onClick ={onclickEdit} >edit</button>
           <button onClick = {showAlert}>show alert</button>
           <button onClick = {()=>showAlert1(sirName)}>showName</button>
    </div>
}
export default Card;