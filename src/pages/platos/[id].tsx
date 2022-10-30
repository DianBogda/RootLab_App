import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { IPlato } from "../../components/PlatoList/PlatoList";
import Plato from '../../components/PlatoList/Plato/Plato';

interface TProps {
  plato: IPlato;
}

const PlatoDetailPage: NextPage<TProps> = ({ plato }) => {
  return (
    <ApplicationWrapper title={plato.name}>
      <Plato plato={plato} />
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/platos/" + context.params?.id
  );
  const plato = await res.json();

  return {
    props: {
      plato,
    },
  };
};

export default PlatoDetailPage;
