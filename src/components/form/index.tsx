"use client"
import { TYPE_EMISSION } from "@/contants";
import ComboBox from "../combobox";

const Form = () => {
  return (
    <form>
      <div className="flex flex-col m-6">
        <div className="mb-2">
          <label htmlFor="valorImportanciaSegurada" className="block text-sm font-medium leading-6 text-gray-100">
            Tipo Emissão:
          </label>
          <div>
            <ComboBox itens={TYPE_EMISSION} onChange={(val) => {
              console.log('VAL', val);
            }} />
            {/* <input 
              className="block w-full rounded text-gray-700 p-1"
              type="text" 
              name="valorImportanciaSegurada" 
              id="valorImportanciaSegurada" 
            /> */}
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="valorIof" className="block text-sm font-medium leading-6 text-gray-100">
            Valor IOF:
          </label>
          <div>
            <input 
              className="block w-full rounded text-gray-700 p-1"
              type="text" 
              name="valorIof" 
              id="valorIof" 
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="valorImportanciaSegurada" className="block text-sm font-medium leading-6 text-gray-100">
            Valor Importância segurada:
          </label>
          <div>
            <input 
              className="block w-full rounded text-gray-700 p-1"
              type="text" 
              name="valorImportanciaSegurada" 
              id="valorImportanciaSegurada" 
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="ehRenovacao" className="text-sm font-medium leading-6 text-gray-100">
            É Renovação:
          </label>
          <input 
            className="block w-full rounded text-gray-700 p-1"
            type="checkbox" 
            name="ehRenovacao" 
            id="ehRenovacao" 
          />
        </div>

        <div className="mt-4">
          <button className="bg-cyan-400 px-5 py-2 sm:w-full rounded">
            Gerar
          </button>
        </div>
      </div>
      {/* <div className="space-y-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-100">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div> */}
    
    </form>
  )
};

export default Form;