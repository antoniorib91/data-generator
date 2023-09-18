import { IBrokerages } from "@/models/interfaces/brokerages";
import { IBusinessPartners } from "@/models/interfaces/business-partners";
import { IItens } from "@/models/interfaces/itens";
import { IPaymentType } from "@/models/interfaces/payment-type";
import { IPersons } from "@/models/interfaces/persons";
import { Policy } from "@/models/objects/policy";

type TTypeEmission = "EndossoMovimentoSemIof" | "EndossoMovimentoComIof" | "ApoliceAberta" | "EndossoRestituicaoComCancelamento" | "ApoliceSemIof" | "EndossoSemMovimento" | "CancelamentoApoliceSemRestituicao" | "ApoliceComIof";

export default class PolicyBuilder {
  private numeroProcessoInterno!: string;
  private nossoNumero: string = '000001';
  private tipoEmissao!: TTypeEmission;
  private tipoCotador!: "V" | string;
  private valorPremioTotal!: number;
  private valorIof!: number;
  private valorImportanciaSegurada!: number;
  private valorPremioLiquido!: number;
  private codigoRamo!: string;
  private numeroApolice!: number;
  private ehRenovacao!: boolean;
  private usuario!: "root";
  private dataHoraDigitacao!: string;
  private dataInicioVigencia!: string;
  private dataFimVigencia!: string;
  private dataInicioViagem!: string;
  private filial!: number;
  private codigoProduto!: number;
  private executivoDeConta!: number;
  private itens!: IItens[];
  private textoEndosso?: string | undefined;
  private formaPagamento!: IPaymentType;
  private corretagens!: IBrokerages[];
  private cosseguradoras!: string;
  private parceirosNegocio!: IBusinessPartners[];
  private pessoas!: IPersons[];
  private copiarDadosSeguradoBPEndosso!: boolean;
  private impressaoBoletoFisico!: "NaoImprime";
  private ehTransporte!: boolean;
  private valorCambioMoedaEstrangeira!: number;
  private prorrogacaoDeVigencia!: boolean;
  private ajusteComercial!: number;
  private lmiUnico!: boolean;
  private subvencoes?: string | undefined;
  private tipoResseguro!: "SemInformacao";
  private codigoCobrancaUnificada!: number;
  private emissaoHistorico?: boolean | undefined;
  private emissaoPedIndice?: boolean | undefined;
  private dataRecebimentoCia!: string;
  private codigoCIA!: number;

  public setNumeroProcessoInterno = () => {
    const milisecs: number = Math.floor(Date.now() / 1000) * Math.random();
    this.numeroProcessoInterno = `${milisecs}`.slice(0, 7);
    return this;
  };

  public setTipoEmissao = (value: TTypeEmission) => {
    this.tipoEmissao = value;
    return this;
  };

  public setTipoCotador = (value?: string) => {
    this.tipoCotador = value || 'V';
    return this;
  };
  
  public setValorPremioTotal = (value: number) => {
    this.valorPremioTotal = value;
    return this;
  };

  public setValorIof = (value: number) => {
    this.valorIof = value;
    return this;
  };

  public setValorImportanciaSegurada = (value: number) => {
    this.valorImportanciaSegurada = value;
    return this;
  };

  public setValorPremioLiquido = (value: number) => {
    this.valorPremioLiquido = value;
    return this;
  };

  public setCodigoRamo = (value: string) => {
    this.codigoRamo = value;
    return this;
  };

  public setNumeroApolice = (value: number) => {
    this.numeroApolice = value;
    return this;
  };

  public setEhRenovacao = (value: boolean) => {
    this.ehRenovacao = value || false;
    return this;
  };

  public setUsuario = (value: 'root') => {
    this.usuario = value || 'root';
    return this;
  }

  public setDataHoraDigitacao = (value: Date | string = new Date()) => {
    this.dataHoraDigitacao = typeof value === 'string' ? value : value?.toUTCString();
    return this;
  };

  public setDataInicioVigencia = (value: Date | string = new Date()) => {
    this.dataInicioVigencia = typeof value === 'string' ? value : value?.toUTCString();
    return this;
  };

  public setDataFimVigencia = (value: Date | string = new Date()) => {
    this.dataFimVigencia = typeof value === 'string' ? value : value?.toUTCString();
    return this;
  };

  public setDataInicioViagem = (value: Date | string = new Date()) => {
    this.dataInicioViagem = typeof value === 'string' ? value : value?.toUTCString();
    return this;
  };

  public setFilial = (value: number) => {
    this.filial = value;
    return this;
  };

  public setCodigoProduto = (value: number) => {
    this.codigoProduto = value;
    return this;
  };

  public setExecutivoDeConta = (value: number) => {
    this.executivoDeConta = value;
    return this;
  };

  public setItens = (value: Array<IItens>) => {
    this.itens = value;
    return this;
  };

  public setFormaPagamento = (value: IPaymentType) => {
    this.formaPagamento = value;
    return this;
  };

  public setCorretagens = (value: Array<IBrokerages>) => {
    this.corretagens = value;
    return this;
  };

  public setParceirosNegocio = (value: Array<IBusinessPartners>) => {
    this.parceirosNegocio = value;
    return this;
  };

  public setPessoas = (value: Array<IPersons>) => {
    this.pessoas = value;
    return this;
  };

  public setCopiarDadosSeguradoBPEndosso = (value: boolean) => {
    this.copiarDadosSeguradoBPEndosso = value || false;
    return this;
  };
  
  public setImpressaoBoletoFisico = (value: 'NaoImprime') => {
    this.impressaoBoletoFisico = value || 'NaoImprime';
    return this;
  };

  public setEhTransporte = (value: boolean) => {
    this.ehTransporte = value || false;
    return this;
  };

  public setValorCambioMoedaEstrangeira = (value: number) => {
    this.valorCambioMoedaEstrangeira = value;
    return this;
  };

  public setProrrogacaoDeVigencia = (value: boolean) => {
    this.prorrogacaoDeVigencia = value || false;
    return this;
  };

  public setAjusteComercial = (value: number) => {
    this.ajusteComercial = value;
    return this;
  };

  public setLmiUnico = (value: boolean) => {
    this.lmiUnico = value || false;
    return this;
  };

  public setTipoResseguro = (value: 'SemInformacao') => {
    this.tipoResseguro = value || 'SemInformacao';
    return this;
  };

  public setCodigoCobrancaUnificada = (value: number) => {
    this.codigoCobrancaUnificada = value;
    return this;
  };

  public setCodigoCIA = (value: number) => {
    this.codigoCIA = value;
    return this;
  };

  public setDataRecebimentoCia = (value: Date | string = new Date()) => {
    this.dataRecebimentoCia = typeof value === 'string' ? value : value?.toUTCString();
    return this;
  };

  public setTextoEndosso = (value?: string) => {
    this.textoEndosso = value || '';
    return this;
  };

  public setSubvencoes = (value?: string) => {
    this.subvencoes = value || undefined;
    return this;
  };

  public setEmissaoHistorico = (value?: boolean) => {
    this.emissaoHistorico = value || undefined;
    return this;
  };

  public setEmissaoPedIndice = (value?: boolean) => {
    this.emissaoPedIndice = value || undefined ;
    return this;
  };

  public setCosseguradoras = (value?: string) => {
    this.cosseguradoras = value || '';
    return this;
  }

  public build = () => {
    return new Policy(
      this.numeroProcessoInterno,
      this.nossoNumero,
      this.tipoEmissao,
      this.tipoCotador,
      this.valorPremioTotal,
      this.valorIof,
      this.valorImportanciaSegurada,
      this.valorPremioLiquido,
      this.codigoRamo,
      this.numeroApolice,
      this.ehRenovacao,
      this.usuario,
      this.dataHoraDigitacao,
      this.dataInicioVigencia,
      this.dataFimVigencia,
      this.dataInicioViagem,
      this.filial,
      this.codigoProduto,
      this.executivoDeConta,
      this.itens,
      this.formaPagamento,
      this.corretagens,
      this.cosseguradoras,
      this.parceirosNegocio,
      this.pessoas,
      this.copiarDadosSeguradoBPEndosso,
      this.impressaoBoletoFisico,
      this.ehTransporte,
      this.valorCambioMoedaEstrangeira,
      this.prorrogacaoDeVigencia,
      this.ajusteComercial,
      this.lmiUnico,
      this.tipoResseguro,
      this.codigoCobrancaUnificada,
      this.codigoCIA,
      this.dataRecebimentoCia,
      this.subvencoes,
      this.textoEndosso,
      this.emissaoHistorico,
      this.emissaoPedIndice,
    )
  }
}