import { ICoverage } from "./coverage";
import { ILocation } from "./location";

interface ICoverages {
  cobertura: ICoverage
}

interface ILocations {
  localRisco: ILocation
};

export interface IItem {
  codigo: number;
  valorImportanciaSegurada: number;
  coberturas: Array<ICoverages>;
  clausulas: boolean | null;
  locais: Array<ILocations>;
};