import { NextRequest, NextResponse } from 'next/server';
import { IPolicy } from '@/models/interfaces/policy';
import { Policy } from '@/models/objects/policy';
import { generateMultipleXmlsFromPolicies } from '@/services/generator-xml';
import PolicyBuilder from '@/services/policy-builder';
interface IRequestModel {
  amount_to_generate: number,
  policy: IPolicy,
}

export async function POST(request: NextRequest) {
  const body = await request.json() as IRequestModel;

  const policies: Policy[] = [];

  const { amount_to_generate, policy } = body;

  for (let i = 0; i < amount_to_generate; i++) {
    const curr = new PolicyBuilder()
      .setNumeroProcessoInterno()
      .setTipoEmissao(policy.tipoEmissao)
      .setTipoCotador(policy.tipoCotador)
      .setValorPremioTotal(policy.valorPremioTotal)
      .setValorIof(policy.valorIof)
      .setValorImportanciaSegurada(policy.valorImportanciaSegurada)
      .setValorPremioLiquido(policy.valorPremioLiquido)
      .setCodigoRamo(policy.codigoRamo)
      .setNumeroApolice(    policy.numeroApolice)
      .setEhRenovacao(policy.ehRenovacao)
      .setUsuario(policy.usuario)
      .setDataHoraDigitacao(policy.dataHoraDigitacao)
      .setDataInicioVigencia(policy.dataInicioVigencia)
      .setDataFimVigencia(policy.dataFimVigencia)
      .setDataInicioViagem(policy.dataInicioViagem)
      .setFilial(policy.filial)
      .setCodigoProduto(policy.codigoProduto)
      .setExecutivoDeConta(policy.executivoDeConta)
      .setItens(policy.itens)
      .setFormaPagamento(policy.formaPagamento)
      .setCorretagens(policy.corretagens)
      .setCosseguradoras(policy.cosseguradoras)
      .setParceirosNegocio(policy.parceirosNegocio)
      .setPessoas(policy.pessoas)
      .setCopiarDadosSeguradoBPEndosso(
        policy.copiarDadosSeguradoBPEndosso
      )
      .setImpressaoBoletoFisico(
        policy.impressaoBoletoFisico
      )
      .setEhTransporte(
        policy.ehTransporte
      )
      .setValorCambioMoedaEstrangeira(
        policy.valorCambioMoedaEstrangeira
      )
      .setProrrogacaoDeVigencia(policy.prorrogacaoDeVigencia)
      .setAjusteComercial(policy.ajusteComercial)
      .setLmiUnico(policy.lmiUnico)
      .setTipoResseguro(policy.tipoResseguro)
      .setCodigoCobrancaUnificada(policy.codigoCobrancaUnificada)
      .setCodigoCIA(policy.codigoCIA)
      .setDataRecebimentoCia(policy.dataRecebimentoCia)
      .setSubvencoes(policy.subvencoes)
      .setTextoEndosso(policy.textoEndosso)
      .setEmissaoHistorico(policy.emissaoHistorico)
      .setEmissaoPedIndice(policy.emissaoPedIndice)
      .build();
      policies.push(curr);
  }

  const xmls = generateMultipleXmlsFromPolicies(policies)
  const resJson: any = {};
  xmls.forEach((val, index) => {
    resJson[`xml${index + 1}`] = val;
  })

  return NextResponse.json(resJson);
}