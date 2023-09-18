import { XmlTags } from "@/contants/xml-tags";
import { Policy } from "./objects/policy";
import { generateXmlFromPolicy } from "@/services/generator-xml";
import { IPaymentType } from "./interfaces/payment-type";
import { IBusinessPartners } from "./interfaces/business-partners";
import { IPersons } from "./interfaces/persons";

const itens = [
  {
    item: {
      codigo: 1,
      valorImportanciaSegurada: 180000.00,
      coberturas: [
        {
          cobertura: {
            codigo: 2,
            ehAssistencia: false,
            valorImportanciaSegurada: 100000,
            valorPremio: 0,
          }
        }
      ],
      clausulas: null,
      locais: [
        {
          localRisco: {
            bairro: 'BOA VISTA',
            cep: '45026415',
            cidade: 'VITORIA DA CONQUISTA',
            logradouro: 'R PRFA FRANCISCA 26',
            tipoLogradouro: 'RUA',
            uf: 'BA'
          }
        }
      ]
    }
  }
];

const formaPgto: IPaymentType = {
  numeroBoleto: 7457649,
  tipo: 'BoletoAguardaPagamento'
};

const corretagens = [
  {
    corretagem: {
      codigoCorretor: 8102,
      corretorPrincipal: true,
      percentualCorretagem: 15,
    },
  }, 
  {
    corretagem: {
      codigoCorretor: 8104,
      corretorPrincipal: false,
      percentualCorretagem: 20,
    },
  }
]

const parceirosNegocios: Array<IBusinessPartners> = [
  {
    parceiroNegocio: {
      codigoCanal: 930124,
      codigoCorretor: 8102,
      percentual: 10,
      quantidadeParcelas: 1,
      tipoCanal: 'Agenciamento'
    }
  },
  {
    parceiroNegocio: {
      codigoCanal: 930124,
      codigoCorretor: 8102,
      percentual: 10,
      quantidadeParcelas: 1,
      tipoCanal: 'Prolabore'
    }
  }
]

const pessoas: Array<IPersons> = [
  {
    pessoa: {
      nome: 'ALIMENTOS TIA SONIA LTDA',
      nomeAbreviado: 'TIA SONIA',
      tipoProponente: 'Subestipulante',
      tipoPessoa: 'Juridica',
      cnpj: '08385685000143',
      renda: 0,
      emailContato: 'testeintegracaoinsuremo@gmail.com',
      tipoDocumento: 'NaoInformado',
      dataNascimento: '0001-01-01T00:00:00',
      dataExpedicao: '0001-01-01T00:00:00',
      ramoAtividadeEmpresa: 'OutrasAtividades',
      sexo: 'NaoInformado',
      telefones: [
        { 
          telefone: {
          ddd: '77',
          numero: '34253545',
          principal: true,
          ramal: '0',
          tipo: 'Comercial'
        }}
      ],
      enderecos: [
        {
          endereco: {
            bairro: 'BOA VISTA',
            cep: '45026415',
            cidade: 'VITORIA DA CONQUISTA',
            logradouro: 'R PRFA FRANCISCA 26',
            tipoLogradouro: 'RUA',
            uf: 'BA'
          }
        }
      ],
      codigoCNAE: 1069400,
      ehResponsavel: true,
      codigoRamoAtividade: 0
    }
  }
]

const policy = new Policy(
  '5498749',
  '165987',
  'ApoliceAberta',
  'V',
  15.5,
  0,
  1800000.00,
  0.00,
  '0993',
  0,
  false,
  'root',
  '2023-08-31T00:00:00-03:00',
  '2023-08-31T00:00:00-03:00',
  '2023-08-31T00:00:00-03:00',
  '2023-08-31T00:00:00-03:00',
  11,
  20,
  1726,
  itens,
  formaPgto,
  corretagens,
  '',
  parceirosNegocios,
  pessoas,
  false,
  'NaoImprime',
  false,
  0,
  false,
  0,
  false,
  'SemInformacao',
  0,
  7000,
  '0001-01-01T00:00:00'
);
// policy.valorPremioLiquido = 0.00;
// policy.codigoRamo = '0993';
// policy.numeroApolice = 0;
// policy.ehRenovacao = false;
// policy.usuario = 'root';
// policy.dataHoraDigitacao = '2023-08-31T00:00:00-03:00';
// policy.dataInicioVigencia = '2023-08-31T00:00:00-03:00';
// policy.dataFimVigencia = '2023-08-31T00:00:00-03:00';
// policy.dataInicioViagem = '2023-08-31T00:00:00-03:00';
// policy.filial = 11;
// policy.codigoProduto = 20;
// policy.executivoDeConta = 1726;
// policy.itens = ;
// policy.formaPagamento = ;
// policy.corretagens = ;
// policy.parceirosNegocio = [
//   {
//     parceiroNegocio: {
//       codigoCanal: 930124,
//       codigoCorretor: 8102,
//       percentual: 10,
//       quantidadeParcelas: 1,
//       tipoCanal: 'Agenciamento'
//     }
//   },
//   {
//     parceiroNegocio: {
//       codigoCanal: 930124,
//       codigoCorretor: 8102,
//       percentual: 10,
//       quantidadeParcelas: 1,
//       tipoCanal: 'Prolabore'
//     }
//   }
// ];
// policy.pessoas = ;
// policy.copiarDadosSeguradoBPEndosso = false;
// policy.impressaoBoletoFisico = 'NaoImprime';
// policy.ehTransporte = false;
// policy.valorCambioMoedaEstrangeira = 0;
// policy.prorrogacaoDeVigencia = false;
// policy.ajusteComercial = 0;
// policy.lmiUnico = false;
// policy.tipoResseguro = 'SemInformacao';
// policy.codigoCobrancaUnificada = 0;
// policy.dataRecebimentoCia = '0001-01-01T00:00:00';
// policy.codigoCIA = 7000;


// console.log('XML => ', generateXmlFromPolicy(policy));
