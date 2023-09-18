import { Policy } from "@/models/objects/policy";
import { js2xml } from "xml-js";

const firstElementLetterToUpperCase = (value: string): string => (
  value.charAt(0).toUpperCase() + value.slice(1, value.length)
);

const mapObjectOrArray = (value: any | Array<unknown>) => {
  if(typeof value !== 'object') {
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      const str = keys[i];
      let el = value[str];
      if((typeof el !== 'object' || Array.isArray(el)) && el === undefined || el === '' || el === null) {
        value[str] = {
          "_attributes": {
            "i:nil": "true",
          },
          "_text": el
        };
      }
    }
  }
  return value;
}

const addNilAttributeToUndefinedValues = (policy: Policy) => {
  const str = JSON.stringify(policy);
  let json = JSON.parse(str);
  const keys = Object.keys(json);

  for (let i = 0; i < keys.length; i++) {
    const el = json[keys[i]];
    if((typeof el !== 'object' || Array.isArray(el)) && el === undefined || el === '' || el === null) {
      json[keys[i]] = {
        "_attributes": {
          "i:nil": "true",
        },
        "_text": el
      };
    } else {
      json[keys[i]] = mapObjectOrArray(json[keys[i]])
    }
  }
  return json;
}

const generateXmlFromPolicy = (policy: Policy) => {
  const obj = addNilAttributeToUndefinedValues(policy)
  const secure = {
    Seguro: {
      "_attributes": {
        "xmlns": "Servicos.Emissao.Entidades",
        "xmlns:i": "http://www.w3.org/2001/XMLSchema-instance"
      },
      ...obj,
    }
  }
  return js2xml(secure, { 
    compact: true, 
    ignoreComment: true, 
    spaces: 0,
    elementNameFn: firstElementLetterToUpperCase,
  })
};

const generateMultipleXmlsFromPolicies = (policies: Array<Policy>): Array<string> => {
  const xmls = [];
  for(let i = 0; i < policies.length; i++) {
    xmls.push(generateXmlFromPolicy(policies[i]));
  }
  return xmls;
}

export {
  generateXmlFromPolicy,
  generateMultipleXmlsFromPolicies
};