import React, { GetStaticProps, NextPage } from 'next'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { IPlato, PlatoList } from "../../components/PlatoList/PlatoList";

interface TProps {
  platos: IPlato[];
  response: string;
}

const Platos: NextPage<TProps> = ({platos}) => {

  return (
      <ApplicationWrapper
      title='Platos' 
      description='Página de Platos'
      >
        <PlatoList platos={platos}/>
      </ApplicationWrapper>
  );
};

export default Platos;

export const getStaticProps: GetStaticProps = async (context) => {
  const platos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/platos`)
      .then((res) => res.json())
      .then((data: IPlato[]) => data.slice(0, 8))
      .catch((error) => console.error(error));

      console.log(platos);

  return {
    props: {
      platos
    },
    revalidate: 10
  };
};