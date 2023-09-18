import { Policy } from "@/models/objects/policy";
import { js2xml } from "xml-js";

const generateXmlFromPolicy = (policy: Policy) => {
  const obj = {
    seguro: policy
  }
  return js2xml(obj, { compact: true, ignoreComment: true, spaces: 4 })
};

const generateMultipleXmlsFromPolicy = (totalXmls: number, policy: Policy) => {
  const xmls = [];
  for(let i = 0; i < totalXmls; i++) {
    xmls.push(generateXmlFromPolicy(policy));
  }
  return xmls;
}

export {
  generateXmlFromPolicy,
  generateMultipleXmlsFromPolicy
};