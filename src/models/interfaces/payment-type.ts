type IBankslipType = 'BoletoAguardaPagamento';

export interface IPaymentType {
  adicionaisFracionamento?: number,
  numeroBoleto: number,
  tipo: IBankslipType,
};