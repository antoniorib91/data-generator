type TPhoneType = 'Comercial'

export interface IPhone {
  ddd: string;
  numero: string;
  observacao?: string;
  principal: boolean;
  ramal: string;
  tipo: TPhoneType;
};