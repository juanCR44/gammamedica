import Navbar from "../../components/navbar/navbar";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Paciente from "../../constants/paciente";
import { start } from "repl";
import { registroPaciente } from "../../controller/paciente";

const RegisterPatient = () => {

    const [date, setDate] = useState<any>()
    function formatCurrentDate() {
        const today = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const formattedDate = formatter.format(today);
        return formattedDate
    }
    useEffect(() => {
        setDate(formatCurrentDate)
    }, [])

    const [numeroDocumento, setNumeroDocumento] = useState<string>('')
    const [apellidoPaterno, setApellidoPaterno] = useState<string>('')
    const [apellidoMaterno, setApellidoMaterno] = useState<string>('')
    const [direccion, setDireccion] = useState<string>('')
    const [celular, setCelular] = useState<string>('')
    const [nacionalidad, setNacionalidad] = useState<string>('')
    const [correo, setCorreo] = useState<string>('')
    const [departamento, setDepartamento] = useState<string>('')
    const [provincia, setProvincia] = useState<string>('')
    const [distrito, setDistrito] = useState<string>('')
    const [nombre, setNombre] = useState<string>('')

    async function register() {
        const startTime = document.getElementById("startTimeInput") as HTMLInputElement;
        const documento = document.querySelector('#documento option:checked') as HTMLInputElement;
        const fechaNacimiento = document.querySelector('input[type="date"]') as HTMLInputElement;
        const genero = document.querySelector('#genero option:checked') as HTMLInputElement;
        const categoria = document.querySelector('#categoria option:checked') as HTMLInputElement;
        const tramite = document.querySelector('#tramite option:checked') as HTMLInputElement;

        let paciente: Paciente = {
            numeroDocumento: numeroDocumento, 
            apellidoMaterno: apellidoMaterno,
            apellidoPaterno: apellidoPaterno,
            direccion: direccion,
            celular: celular,
            nacionalidad:nacionalidad,
            correo:correo,
            departamento:departamento,
            provincia:provincia,
            distrito:distrito,
            nombre:nombre,
            startTime:startTime.value,
            documento:documento.value,
            fechaNacimiento:fechaNacimiento.value,
            genero:genero.value,
            categoria:categoria.value,
            tramite:tramite.value
        }

        let res = await registroPaciente(paciente);
        console.log(res)
    }

    return (
        <div className="view">
            <Navbar />
            <div className="container column">
                <section className="gap10">
                    <h1>DATOS DE EVALUACION MEDICA</h1>
                    <div className="half">
                        <div className="row space-between width100">
                            <div className="column gap10">
                                <div className="row gap10">
                                    <p>Hora de inicio:</p>
                                    <input id="startTimeInput" type="time" name="appt" />
                                </div>
                                <p>Hora de fin:</p>
                            </div>
                            <div className="row gap10">
                                Fecha de Informe: {date}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gap10">
                    <h1>DATOS DEL POSTULANTE</h1>
                    <div className="row">
                        <div className="half">
                            <div className="row w100  gap10">
                                <p>Tipo de Documento</p>
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
                            <div className="row w100 gap10">
                                <p>Numero de Documento:</p>
                                <input onChange={(e) => setNumeroDocumento(e.target.value)} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="half">
                            <div className="row w100 gap10">
                                <p>Apellido Paterno:</p>
                                <input onChange={(e) => setApellidoPaterno(e.target.value)} type="text" />
                            </div>
                            <div className="row w100 gap10">
                                <p>Apellido Materno:</p>
                                <input onChange={(e) => setApellidoMaterno(e.target.value)} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p>Nombre:</p>
                        <input onChange={(e) => setNombre(e.target.value)} type="text" />
                    </div>
                    <div className="row">
                        <div className="half">
                            <div className="row w100 gap10">
                                <p>F. Nacimiento:</p>
                                <input type="date" id="birthdate" name="trip-start" min="1900-01-01" />
                            </div>
                            <div className="row w100 gap10">
                                <p>Sexo:</p>
                                <select name="gender" id="genero">
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="half">
                            <div className="row w100 gap10">
                                <p>Direccion:</p>
                                <input onChange={(e) => setDireccion(e.target.value)} type="text" />
                            </div>
                            <div className="row w100 gap10">
                                <p>Celular:</p>
                                <input onChange={(e) => setCelular(e.target.value)} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="half">
                            <div className="row w100 gap10">
                                <p>Nacionalidad:</p>
                                <input onChange={(e) => setNacionalidad(e.target.value)} type="text" />
                            </div>
                            <div className="row w100 gap10">
                                <p>Correo Electronico:</p>
                                <input onChange={(e) => setCorreo(e.target.value)} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="half gap30">
                            <div className="column w100">
                                <p>Departamento</p>
                                <input onChange={(e) => setDepartamento(e.target.value)} type="text" />
                            </div>
                            <div className="column w100">
                                <p>Provincia</p>
                                <input onChange={(e) => setProvincia(e.target.value)} type="text" />
                            </div>
                            <div className="column w100">
                                <p>Distrito</p>
                                <input onChange={(e) => setDistrito(e.target.value)} type="text" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gap10">
                    <h1>DATOS DE CATEGORIA Y TRAMITE</h1>
                    <div className="row gap10">
                        <p>Categoria:</p>
                        <select name="categorias" id="categoria">
                            <option value="A1 Clasico">A1 Clasico</option>
                            <option value="B2b Moto">B2b Moto</option>
                            <option value="B2a Bicimoto">B2a Bicimoto</option>
                            <option value="A4">A4</option>
                            <option value="A2a">A2a</option>
                            <option value="A2b">A2b</option>
                            <option value="A3a">A3a</option>
                            <option value="A3b">A3b</option>
                            <option value="A3c">A3c</option>
                            <option value="B2c Mototaxi">B2c Mototaxi</option>
                        </select>
                    </div>
                    <div className="row gap10">
                        <p>Tramite:</p>
                        <select name="tramites" id="tramite">
                            <option value="nuevo">Nuevo</option>
                            <option value="revalidacion">Revalidacion</option>
                            <option value="recategorizacion">Recategorizacion</option>
                            <option value="canjee extranjero">Canjee extranjero</option>
                            <option value="canjee extranjero especial">Canjee extranjero especial</option>
                            <option value="modificacion de la informacion">Modificacion de la informacion</option>
                        </select>
                    </div>
                </section>
                <div className="row mt100">
                    <div className="half">
                        <button className="secondary">Lista de pacientes</button>
                        <button className="secondary" onClick={() => register()}>REGISTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPatient;