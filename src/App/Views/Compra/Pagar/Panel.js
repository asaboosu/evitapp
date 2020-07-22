import React, { Component } from 'react'

export default class Panel extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mx-auto col-sm-3 p-1 ">
                        <button className="btn btn-block btn-success">
                            Limpiar
                                    </button>

                    </div>
                    <div className="col-md-12 mx-auto col-sm-3 p-1 ">
                        <button className="btn btn-block btn-success">
                            Quitar
                                    </button>

                    </div>
                    <div className="col-md-12 mx-auto col-sm-3 p-1 ">
                        <button className="btn btn-block btn-warning">
                            Ver
                                    </button>

                    </div>
                    <div className="col-md-12 mx-auto col-sm-3 p-1 ">
                        <button className="btn btn-block btn-warning">
                            Entregar
                                    </button>

                    </div>



                </div>
            </div>
        )
    }
}
