type IChanelType = 'Agenciamento' | 'Prolabore';

export interface IBusinessPartner {
  agenciamento?: string;
  codigoCanal: number;
  codigoCorretor: number;
  percentual: number;
  quantidadeParcelas: number;
  tipoCanal: IChanelType;
};