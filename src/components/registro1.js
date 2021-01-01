import React from 'react'

class FormularioRegistro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            estado: '',
            ciudad: '',
            terminos: false,
        };
        console.log(this.state);
    
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleSubmit(e) {
        console.log('******** Guardados');
        e.preventDefault();
      }


    handleChange = (e) => {
        const { name, value } = e.target;
        (name === 'terminos')?
            this.setState(state => ({
                terminos: !state.terminos
              }))
            : this.setState({ [name]: value })
        console.log(this.state.terminos);
    }
    
      render() {
        const { email, password, address, estado, ciudad, terminos } = this.state
        return (
            <div className="col-5 mx-auto">

            <form onSubmit={this.handleSubmit} method='POST'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} 
                onChange={this.handleChange}  placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} 
                onChange={this.handleChange} placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={address} 
                onChange={this.handleChange} placeholder="1234 Main St" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="ciudad">City</label>
                    <input type="text" className="form-control" id="ciudad" value={ciudad} 
                onChange={this.handleChange} name="ciudad" />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="estado">State</label>
                    <select id="estado" className="form-control" name="estado"
                            onChange={this.handleChange} >
                        <option selected value={estado} >Choose...</option>
                        <option value="guancaste">Guanacaste</option>
                        <option value="alajuela">Alajuela</option>
                        <option value="puntarena">Puntarenas</option>
                        <option value="cartago">Cartago</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terminos" name="terminos" 
                        checked={terminos} onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="haAceptadoTerminos">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
        );
    }
}

export default FormularioRegistro;