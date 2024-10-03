import Navbar from "../../components/navbar/navbar";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const Pacientes = () => {

    const [user, setUser] = useState<number>(1)
    const [sanguineo, setSanguineo] = useState<string>('')

    const [numeroDocumento, setNumeroDocumento] = useState<string>('')
    const [apellidoPaterno, setApellidoPaterno] = useState<string>('')
    const [apellidoMaterno, setApellidoMaterno] = useState<string>('')
    const [nombre, setNombre] = useState<string>('')

    useEffect(() => {
    }, [])

    function toggleView(e: any) {
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

    async function doFilter() {
        const startTime = document.getElementById("startTimeInput") as HTMLInputElement;
        const documento = document.querySelector('#documento option:checked') as HTMLInputElement;
        const fechaNacimiento = document.querySelector('input[type="date"]') as HTMLInputElement;
        const genero = document.querySelector('#genero option:checked') as HTMLInputElement;
        const categoria = document.querySelector('#categoria option:checked') as HTMLInputElement;
        const tramite = document.querySelector('#tramite option:checked') as HTMLInputElement;
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
                                <input onChange={(e) => setNombre(e.target.value)} type="text" />
                            </div>
                            <div className="row gap10">
                                <p className="bold">A. Paterno:</p>
                                <input onChange={(e) => setApellidoPaterno(e.target.value)} type="text" />
                            </div>
                            <div className="row gap10">
                                <p className="bold">A. Materno:</p>
                                <input onChange={(e) => setApellidoMaterno(e.target.value)} type="text" />
                            </div>
                        </div>
                        <div className="column w100 gap5">
                            <div className="row gap10">
                                <p className="bold">Tipo de Documento:</p>
                                <select name="languages" id="documento">
                                    <option value="DNI">DNI</option>
                                    <option value="Carnet de extranjeria">Carnet de extranjeria</option>
                                    <option value="pasaporte">Pasaporte</option>
                                    <option value="RUC">RUC</option>
                                    <option value="CPP">CPP</option>
                                    <option value="Carnet diplomatico">Carnet diplomatico</option>
                                    <option value="Tarjeta de identidad diplomatico">Tarjeta de identidad diplomatico</option>
                                </select>
                            </div>
                            <div className="row gap10">
                                <p className="bold">Genero:</p>
                                <select name="gender" id="genero">
                                    <option value="javascript">Masculino</option>
                                    <option value="php">Femenino</option>
                                </select>
                            </div>
                            {/*<div className="row gap10">
                                <p className="bold">Edad:</p>
                                <input type="text" />
                            </div>*/}
                        </div>
                        <div className="column w100 gap5">
                            <div className="row gap10">
                                <p className="bold">Documento de Identidad:</p>
                                <input onChange={(e) => setNumeroDocumento(e.target.value)} type="text" />
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
                            <div className="patient-toggle gap5 column">
                                <div className="row w100 align-center">
                                    <p className="bold w100">Lab grupo Sanguineo</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p>17:34:00</p>
                                    </div>
                                    <div className="row gap10 gsan">
                                        <p className="bold">G. San:</p>
                                        {user == 1 ? (
                                            <select name="sang" id="sanguineo">
                                                <option value="A+">A+</option>
                                                <option value="O+">O+</option>
                                                <option value="B+">B+</option>
                                                <option value="AB+">AB+</option>
                                                <option value="A-">A-</option>
                                                <option value="O-">O-</option>
                                                <option value="B-">B-</option>
                                                <option value="AB-">AB-</option>
                                            </select>
                                        ) :
                                            (
                                                <select name="sang" id="sanguineo" disabled>
                                                    <option value="A+">A+</option>
                                                    <option value="O+">O+</option>
                                                    <option value="B+">B+</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="O-">O-</option>
                                                    <option value="B-">B-</option>
                                                    <option value="AB-">AB-</option>
                                                </select>
                                            )}
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
                                <div className="row w100 align-center">
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
                                <div className="row w100 align-center">
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
                                <div className="row w100 align-center">
                                    <p className="bold w100">Auditivo</p>
                                    <div className="row w100 gap10">
                                        <p className="bold">Inicio</p>
                                        <p>17:34:00</p>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Fin:</p>
                                        <button className="button-tiny">Finalizar</button>
                                    </div>
                                    <div className="row w100 gap10">
                                        <p className="bold">Estado:</p>
                                        <p className="green">EN PROCESO</p>
                                    </div>
                                </div>
                                <div className="row w100 align-center">
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