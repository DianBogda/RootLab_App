import React, { NextPage } from 'next'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'

type HomeProps = {
  response: string
}

const Home: NextPage<HomeProps> = () => {

  return (
      <ApplicationWrapper 
        title='Home' 
        description='Página Principal'
      >
          <div className="grow flex flex-col justify-center items-center bg-[url('/images/fondo_chile.jpg')] bg-cover">
            <div className="grow bg-slate-200 w-full flex gap-5 flex-col justify-center items-center opacity-80">
              <h1 className="text-7xl font-mono font-bold text-red-500 text-center">
                Comida Típica Chilena
              </h1>
              <h2 className="text-4xl font-mono font-bold text-blue-500 text-center">
                  Si vienes a Chile no puedes dejar de probar algunos de estos deliciosos platillos.
              </h2>
              <h3 className="text-3xl font-mono font-bold text-blue-500 text-end">
                  Nombre: Diana Bogdanic / email: diannitaab@gmail.com
              </h3>              
            </div>
          </div>
      </ApplicationWrapper>
  );
};

export default Home;
