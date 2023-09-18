import { IBrokerages } from "./brokerages";
import { IBusinessPartners } from "./business-partners";
import { IItens } from "./itens";
import { IPaymentType } from "./payment-type";
import { IPersons } from "./persons";

type TCotador = 'V' | string;
type TUser = 'root';
type TPrintPhisicalyBankslip = 'NaoImprime';
type TTypeSecure = 'SemInformacao';
type TTypeEmission =
'EndossoMovimentoSemIof' |
'EndossoMovimentoComIof' |
'ApoliceAberta' |
'EndossoRestituicaoComCancelamento' |
'ApoliceSemIof' |
'EndossoSemMovimento' |
'CancelamentoApoliceSemRestituicao' |
'ApoliceComIof';

export interface IPolicy {
  numeroProcessoInterno: string;
  nossoNumero: string;
  tipoEmissao: TTypeEmission;
  tipoCotador: TCotador;
  valorPremioTotal: number;
  valorIof: number;
  valorImportanciaSegurada: number;
  valorPremioLiquido: number;
  codigoRamo: string;
  numeroApolice: number;
  ehRenovacao: boolean;
  usuario: TUser;
  dataHoraDigitacao: string;
  dataInicioVigencia: string;
  dataFimVigencia: string;
  dataInicioViagem: string;
  filial: number;
  codigoProduto: number;
  executivoDeConta: number;
  itens: Array<IItens>;
  textoEndosso?: string;
  formaPagamento: IPaymentType;
  corretagens: Array<IBrokerages>;
  cosseguradoras: string;
  parceirosNegocio: Array<IBusinessPartners>;
  pessoas: Array<IPersons>
  copiarDadosSeguradoBPEndosso: boolean;
  impressaoBoletoFisico: TPrintPhisicalyBankslip;
  ehTransporte: boolean;
  valorCambioMoedaEstrangeira: number;
  prorrogacaoDeVigencia: boolean;
  ajusteComercial: number;
  lmiUnico: boolean;
  subvencoes?: string;
  tipoResseguro: TTypeSecure;
  codigoCobrancaUnificada: number;
  emissaoHistorico?: boolean;
  emissaoPedIndice?: boolean;
  dataRecebimentoCia: string;
  codigoCIA: number;
};