export interface Field {
  value: string | number | Date | boolean | Field | Array<Field> ;
  name: string;
  xmlTagName: string;
};