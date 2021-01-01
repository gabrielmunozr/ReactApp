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

            <div className="form-group col-md-6">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" id="email" name="email" value={props.state.email} 
                        onChange={props.handleChange} />
            </div>
        </>
    );
}
export default BancoDatos;