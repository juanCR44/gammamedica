import Documento from "./documento";

export interface Paciente {
    paternalLastName: string,
    maternalLastName: string,
    address: string,
    phone: string,
    nationality: string,
    email: string,
    departament: string,
    province: string,
    district: string,
    name: string,
    age:string,
    bloodtype:string,
    /*startTime: string*/
    birthday: string,
    gender: string,
    document: Documento
    /*categoria:string,
    tramite:string*/
}

export default Paciente;   