"use client"

import { Fragment, useState } from "react";
import { Combobox } from '@headlessui/react'
import { CheckIcon } from "@heroicons/react/20/solid";

interface IComboBox {
  itens: Array<unknown>,
  name?: string,
  onChange: (value: any) => {} | void
}

const ComboBox = ({ itens, onChange, name }: IComboBox) => {
  const [selected, setSelected] = useState(itens[0])
  const [query, setQuery] = useState('')

  const filteredItens =
    query === ''
      ? itens
      : itens.filter((item: any) => {
        if(typeof item === 'object') {
          return item?.descricao?.toLowerCase().includes(query.toLowerCase())
          || item?.codigo?.toLowerCase().includes(query.toLowerCase())
        } else {
          return `${item}`.includes(query.toLowerCase())
        }
        });

  const handleOnChange = (value: any) => {
    setSelected(value);
    if(onChange) onChange(value);
  }

  return (
    <Combobox value={selected} onChange={handleOnChange} name={name}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredItens.map((item: any, index) => {
          return typeof item === 'object'
          ? (
            <Combobox.Option key={item?.codigo} value={item?.codigo} as={Fragment}>
             {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {selected && <CheckIcon />}
                {item?.descricao}
              </li>
             )}
            </Combobox.Option>
          ) : (
            <Combobox.Option key={'item_' + index} value={item} as={Fragment}>
              {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {selected && <CheckIcon />}
                {item?.item}
              </li>
             )}
            </Combobox.Option>
          )
        })}
      </Combobox.Options>
    </Combobox>
  )
};

export default Combobox;