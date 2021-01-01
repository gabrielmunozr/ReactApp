import React from 'react';

function BancoDatos(props){
    return (
        <>
            <h1>Preview</h1>
            <p>{props.state.email}</p>
            <p>{props.state.password}</p>
            <p>{props.state.password}</p>
            <p>{props.state.estado}</p>
            <p>{props.state.ciudad}</p>
            <p>{props.state.terminos}</p>
        </>
    );
}
export default BancoDatos;