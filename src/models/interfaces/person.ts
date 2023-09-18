import { ILocation } from "./location";
import { IPhone } from "./phone";

type TTypeProponent = 'Subestipulante';
type TTypePerson = 'Juridica' | 'Fisica'
type TTypeDocument = 'NaoInformado'
type TBusinessActivity = 'OutrasAtividades';
type TGender = 'NaoInformado'

interface IPhones {
  telefone: IPhone
};

interface IAddress {
  endereco: ILocation;
}

export interface IPerson {
  nome: string;
  nomeAbreviado: string;
  nomeContato?: string;
  tipoProponente: TTypeProponent;
  tipoPessoa: TTypePerson;
  cpf?: string;
  cnpj?: string;
  renda: number;
  profissao?: string;
  emailContato: string;
  tipoDocumento: TTypeDocument;
  numeroDocumento?: string;
  orgaoExpedidor?: string;
  dataExpedicao: string;
  dataNascimento: string;
  ramoAtividadeEmpresa: TBusinessActivity;
  sexo: TGender;
  telefones: Array<IPhones>;
  enderecos: Array<IAddress>;
  codigoCNAE: number;
  ehResponsavel: boolean;
  grupoFinanceiro?: boolean;
  codigoRamoAtividade: number;
};