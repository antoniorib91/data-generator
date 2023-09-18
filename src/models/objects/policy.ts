import { IBrokerages } from "../interfaces/brokerages";
import { IBusinessPartners } from "../interfaces/business-partners";
import { IItens } from "../interfaces/itens";
import { IPaymentType } from "../interfaces/payment-type";
import { IPersons } from "../interfaces/persons";
import { IPolicy } from "../interfaces/policy";

export class Policy implements IPolicy {
  constructor(
    public numeroProcessoInterno: string,
    public nossoNumero: string,
    public tipoEmissao: "EndossoMovimentoSemIof" | "EndossoMovimentoComIof" | "ApoliceAberta" | "EndossoRestituicaoComCancelamento" | "ApoliceSemIof" | "EndossoSemMovimento" | "CancelamentoApoliceSemRestituicao" | "ApoliceComIof",
    public tipoCotador: "V" | string,
    public valorPremioTotal: number,
    public valorIof: number,
    public valorImportanciaSegurada: number,
    public valorPremioLiquido: number,
    public codigoRamo: string,
    public numeroApolice: number,
    public ehRenovacao: boolean,
    public usuario: "root",
    public dataHoraDigitacao: string,
    public dataInicioVigencia: string,
    public dataFimVigencia: string,
    public dataInicioViagem: string,
    public filial: number,
    public codigoProduto: number,
    public executivoDeConta: number,
    public itens: IItens[],
    public formaPagamento: IPaymentType,
    public corretagens: IBrokerages[],
    public cosseguradoras: string,
    public parceirosNegocio: IBusinessPartners[],
    public pessoas: IPersons[],
    public copiarDadosSeguradoBPEndosso: boolean,
    public impressaoBoletoFisico: "NaoImprime",
    public ehTransporte: boolean,
    public valorCambioMoedaEstrangeira: number,
    public prorrogacaoDeVigencia: boolean,
    public ajusteComercial: number,
    public lmiUnico: boolean,
    public tipoResseguro: "SemInformacao",
    public codigoCobrancaUnificada: number,
    public codigoCIA: number,
    public dataRecebimentoCia: string,
    public subvencoes?: string | undefined,
    public textoEndosso?: string | undefined,
    public emissaoHistorico?: boolean | undefined,
    public emissaoPedIndice?: boolean | undefined,
  ) {}
}