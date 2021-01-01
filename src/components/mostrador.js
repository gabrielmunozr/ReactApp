import React from 'react';

function BancoDatos(props){
    return (
        <>
            <p>{props.nombre}</p>
            <p>{props.apellido}</p>
        </>
    );
}
export default BancoDatos;