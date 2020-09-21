import React from 'react';

const HolaMundo = () =>{
    const Hello = 'Hola Mundo';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Basico de REact</h2>
            <img src="https://saberimagenes.com/wp-content/uploads/2018/12/Universo15.jpg" alt="React"/>
            {isTrue ? <h3>Esto es verdadero</h3> : <h4>Es falso</h4>}
            {isTrue && <h5>Es verdadero</h5>}
        </div>
    );
};

export default HolaMundo;