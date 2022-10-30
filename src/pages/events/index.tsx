import React, { useContext, useState } from 'react';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { userContext } from '../../components/context/UserContext';
import { NextPage } from 'next'

type EventsProps = {
  response: string
}

const Events: NextPage<EventsProps> = () => {

  const defaultStyle = 'border shadow border-black';
  const hooverStyle = 'border shadow border-black bg-red-500';

  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [checkSelected, setCheckSelected] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(defaultStyle);

  const { userName, setUsername, setUserDetail } = useContext(userContext);

  const onClickHandler = () => {
    setTexto('¡El texto cambia!');
    console.log('Click en el botón');
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
    console.log('Input changed!!!', event.target.value);
  };

  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('¡El número cambia!');
    setNumero(event.target.value);
  };

  const onCheckChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Check cambia', event.target.checked);
    setCheckSelected(event.target.checked);
  };

  const onSelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    console.log('El valor del select es: ', event.target.value);
  };

  // @ts-ignore
  const onSubmitHandler = (event) => {
    console.log(
      'submit',
      'texto', texto,
      'numero', numero,
      'isValid', isValid,
      'checkSelected', checkSelected,
      'selectValue', selectValue,
    );
    setSelectValue('');
    setUsername('');
    // @ts-ignore
    setUserDetail({
      status: {
        enabled: true
      },
      email: 'diana.bogdanic@gmail.com'
    });
    event.preventDefault();
  };

  const onDivClickHandler = () => {
    console.log('click en el div');
  };

  // @ts-ignore
  const onClickPropagationHandler = (event) => {
    console.log('Click en el segundo botón');
    event.stopPropagation();
  };

  return (
    <ApplicationWrapper title='Eventos'>
      <div className='bg-white text-black h-full p-8 m-8 flex flex-col gap-2'>

        <h1>Demo de algunos eventos / {userName}</h1>

        <span>El valor es: {texto}</span>

        <input type='text' placeholder='Ingrese un texto' className='bg-white text-black border'
               onChange={onChangeHandler}
               value={texto}
               onFocus={() => {
                 console.log('usuario activo la caja de texto');
               }}
               onBlur={() => {
                 setIsValid(texto.length > 0);
                 console.log('usuario desactivo la caja de texto');
               }}
        />

        <input className='bg-white tex-black' type='number' placeholder='Ingrese un número' value={numero} onChange={onNumberChange}/>
        {texto.length === 0 && <span className='text-red-700'>El valor es requerido</span>} &nbsp; 
        {!isValid && <span className='text-red-700'>El valor es requerido (focus)</span>} &nbsp; 

        <input type='checkbox' className='bg-white text-white' onChange={onCheckChangeHandler} checked={checkSelected}/>

        <select className='bg-white' onChange={onSelectChangeHandler} value={selectValue}>
          <option value='Elija una opción'></option>
          <option value='1'>Valor 1</option>
          <option value='2'>Valor 2</option>
          <option value='3'>Valor 3</option> &nbsp; 
        </select>

        <form onSubmit={onSubmitHandler}>
          <button type='submit' className='border shadow border-black'>Enviar y Logout</button> &nbsp; 
        </form>

        <div onClick={onDivClickHandler} className='border border-red-900 p-4'>
          <button className={buttonStyle} onClick={onClickHandler}
                  onMouseEnter={() => {
                    setButtonStyle(hooverStyle);
                  }}
                  onMouseLeave={() => {
                    setButtonStyle(defaultStyle);
                  }}>
            Test button
          </button> &nbsp; 
          <button className='border shadow border-black' onClick={onClickPropagationHandler}>Test propagation</button>
          {checkSelected && <button className='border shadow border-black' onClick={() => {
            console.log('arrow function');
          }}>Test button 2</button>}
        </div>
      </div>
    </ApplicationWrapper>);
};

export default Events;
