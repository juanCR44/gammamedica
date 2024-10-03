import Navbar from "../../components/navbar/navbar";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const Pacientes = () => {

    useEffect(() => {


    }, [])

    function toggleView(e:any) {
        const element = document.querySelector('.patient-toggle')
        if (element) {
            if (element.classList.contains('active')) {
                element.classList.remove('active')
                 e.target.textContent = 'Mostrar'
            } else {
                element.classList.add('active')
                e.target.textContent = 'Ocultar'
            }
        }
    }


    return (
        <div className="view">
            <Navbar />
            <div className="container column">
                <section className="filter">
                    <h1 className="mb10">Filtrar por:</h1>
                    <div className="row">
                        <div className="column w100 gap5">
                            <div className="row gap10">
                                <p className="bold">Nombre:</p>
                                <input type="text" />
                            </div>
                            <div className="row gap10">
                                <p className="bold">A. Paterno:</p>
                                <input type="text" />
                            </div>
                            <div className="row gap10">
                                <p className="bold">A. Materno:</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="column w100 gap5">
                            <div className="row gap10">
                                <p className="bold">Tipo de Documento:</p>
                                <select name="languages" id="lang">
                                    <option value="javascript">JavaScript</option>
                                    <option value="php">PHP</option>
                                    <option value="java">Java</option>
                                    <option value="golang">Golang</option>
                                    <option value="python">Python</option>
                                    <option value="c#">C#</option>
                                    <option value="C++">C++</option>
                                    <option value="erlang">Erlang</option>
                                </select>
                            </div>
                            <div className="row gap10">
                                <p className="bold">Genero:</p>
                                <select name="gender" id="gend">
                                    <option value="javascript">Masculino</option>
                                    <option value="php">Femenino</option>
                                </select>
                            </div>
                            <div className="row gap10">
                                <p className="bold">Edad:</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="column w100 gap5">
                            <div className="row gap10">
                                <p className="bold">Documento de Identidad:</p>
                                <input type="text" />
                            </div>
                            <div className="row gap10">
                                <p className="bold">Fecha:</p>
                                <input type="date" id="start" name="trip-start" min="1900-01-01" />
                            </div>
                        </div>
                        <div className="w100">
                            <button className="secondary filter-button">Buscar</button>
                        </div>
                    </div>
                </section>
                <section className="section-patient">
                    <div className="table-patient column gap5">
                        <div className="patient column gap5">
                            <div className="patient-info row">
                                <div className="column w100 gap5">
                                    <div className="row gap10">
                                        <p className="bold">Paciente:</p>
                                        <p>Pepito Juarez</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Documento de Identidad:</p>
                                        <p>02919020</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Fecha:</p>
                                        <p>09/23/24</p>
                                    </div>
                                </div>
                                <div className="column w100 gap5">
                                    <div className="row gap10">
                                        <p className="bold">Hora de Inicio:</p>
                                        <p>17:36:00</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Categoria:</p>
                                        <p>A1</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="green">ACTIVO</p>
                                    </div>
                                </div>
                                <div className="column w100 gap5 height100">
                                    <div className="row">
                                        <p className="bold">Hora de Fin:</p>
                                    </div>
                                </div>
                                <div className="row w100 space-evenly">
                                    <button className="third">Descargar Ruta</button>
                                    <button onClick={(e) => toggleView(e)} className="third">Mostrar</button>
                                </div>
                            </div>
                            <div className="patient-toggle gap10 column">
                                <div className="row w100">
                                    <p className="bold w100">Lab grupo Sanguineo</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p>17:34:00</p>
                                    </div>
                                    <div className="row gap10 gsan">
                                        <p className="bold">G. San:</p>
                                        <p>O+</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Fin:</p>
                                        <p>17:45:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="red">FINALIZADO</p>
                                    </div>
                                </div>
                                <div className="row w100">
                                    <p className="bold w100">Psicologico</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p>17:34:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Fin:</p>
                                        <p>17:45:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="red">FINALIZADO</p>
                                    </div>
                                </div>
                                <div className="row w100">
                                    <p className="bold w100">Visual</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p>17:34:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Fin:</p>
                                        <p>17:45:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="red">FINALIZADO</p>
                                    </div>
                                </div>
                                <div className="row w100">
                                    <p className="bold w100">Auditivo</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p>17:34:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Fin:</p>
                                        <p> </p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="green">EN PROCESO</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="bold w100">Clinico</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p> </p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Fin:</p>
                                        
                                        <p> </p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="green">EN PROCESO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="patient">
                            <div className="patient-info row">
                                <div className="column w100 gap5">
                                    <div className="row gap10">
                                        <p className="bold">Paciente:</p>
                                        <p>Pepito Juarez</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Documento de Identidad:</p>
                                        <p>02919020</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Fecha:</p>
                                        <p>09/23/24</p>
                                    </div>
                                </div>
                                <div className="column w100 gap5">
                                    <div className="row gap10">
                                        <p className="bold">Hora de Inicio:</p>
                                        <p>17:36:00</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Categoria:</p>
                                        <p>A1</p>
                                    </div>
                                    <div className="row gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="red">FINALIZADO</p>
                                    </div>
                                </div>
                                <div className="column w100 gap5 height100">
                                    <div className="row">
                                        <p className="bold">Hora de Fin:</p>
                                    </div>
                                </div>
                                <div className="row w100 space-evenly">
                                    <button className="third">Descargar Ruta</button>
                                    <button className="third">Mostrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row flex-left">
                    <button className="secondary">Regresar a Registro</button>
                </div>
            </div>
        </div>
    )
}

export default Pacientes;