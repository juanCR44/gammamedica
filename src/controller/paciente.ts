import Paciente from "../constants/paciente";

const urlRegistroPaciente = "http://localhost:8000/registrarpaciente"

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