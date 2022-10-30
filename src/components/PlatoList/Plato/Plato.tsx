import Link from "next/link";
import React, { FC } from "react";
import { IPlato } from "../PlatoList";
import Image from "next/image";

interface TProps {
  plato: IPlato;
}

const Plato: FC<TProps> = ({ plato }) => {
  return (
    <li className="list-none flex flex-col">
      <Link href={`/platos/${plato.id}`}>
        <Image 
          className="cursor-pointer" 
          src={plato.url} 
          alt={`${plato.name} Fotografía`} 
          width={1000}
          height={650}
          />
      </Link>
      <strong className="text-lg text-white">*Nombre: {plato.name}</strong>
      <strong className="text-lg text-white">*Lugar de Origen: {plato.lugar_origen}</strong>
      <strong className="text-lg text-white">*Cuando comer: {plato.cuando_comer}</strong>
      <strong className="text-lg text-white">*Calorías: {plato.kg}</strong>
      <strong className="text-lg text-white">*Ingredientes: {plato.ingredientes}</strong>
    </li>
  );
};

export default Plato;
