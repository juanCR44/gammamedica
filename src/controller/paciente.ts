import Filtro from "../constants/filtro";
import Paciente from "../constants/paciente";

const urlRegistroPaciente = "http://localhost:8080/api/v1/patient/create"
const urlGetPatientByFilter = "http://localhost:8000/getpaciente"

export async function registroPaciente(paciente: Paciente): Promise<any> {
    let value = ''

    let res = await fetch(urlRegistroPaciente, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paciente),
    })
        .then(res => res.json()) //returns array of data
        .then(res => { value = res; console.log(res) });
    return value;
}

export async function getPatientByFilter(filtro: Filtro): Promise<any> {
    let value = ''

    let query = new URLSearchParams({
        numeroDocumento: filtro.numeroDocumento ?? '',
        apellidoPaterno: filtro.apellidoPaterno ?? '',
        apellidoMaterno: filtro.apellidoMaterno ?? '',
        nombre: filtro.nombre ?? '',
        documento: filtro.documento ?? '',
        genero: filtro.genero ?? '',
        fecha: filtro.fecha ?? ''
    });

    await fetch(urlGetPatientByFilter + '?' + query, {
        method: 'GET',
        //headers: { "Content-Type": "application/json" },
        // We convert the React state to JSON and send it as the POST body
        //headers: { 'Content-Type': 'application/json', 'authorization' : token },
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json()) //returns array of data
        .then(res => { console.log(res.data); value = res.data }); //assign state to array res

    return value;
}