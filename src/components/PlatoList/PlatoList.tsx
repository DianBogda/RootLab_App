import React from "react";
import Plato from "./Plato/Plato";

export interface IPlato {
    id: number;
    name: string;
    lugar_origen: string;
    cuando_comer: string;
    kg: string;
    ingredientes: string;
    url: string;
}

interface Props {
  platos: IPlato[];
}

export const PlatoList = ({platos}: Props) => {
  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {platos.map((plato) => (
          <Plato key={plato.id} plato={plato} />
        ))}
      </ul>
    </div>
  );
};
