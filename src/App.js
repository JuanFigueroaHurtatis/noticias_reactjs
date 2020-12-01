import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  const[categoria, guardarCategoria] = useState('');
  const[noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=dbfacc9e6d674fe7a1ece49c8cf46dc5`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo='Buscador de Noticias' />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
