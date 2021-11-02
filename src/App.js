import { useState } from "react"
import React, { useEffect } from 'react'
import './App.css';



const App = () => {
  const [actividades, setActividades] = useState([])
  const [tareas, setTareas] = useState([])

  const CrearUsuario = () => {
    let opcionesdelRequest1 = {
      method: "POST",
      body: JSON.stringify([
      ]),
      headers: {
        'content-type': 'application/json'

      }
    }

    fetch('https://assets.breatheco.de/apis/fake/todos/user/erickgz87', opcionesdelRequest1)
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);

        return response.json();
      })
      .then((data) => {
        console.log(data);

       

      })
      .catch((error) => {
        console.warn("ha ocurrido un error", error)
      })


  }
  const CargarTareas = () => {
    let opcionesdelRequest1 = {
      method: "GET",
      headers: {
        'content-type': 'application/json'

      }
    }

    fetch('https://assets.breatheco.de/apis/fake/todos/user/erickgz87', opcionesdelRequest1)
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);

        return response.json();
      })
      .then((data) => {
        console.log(data);

        let lista = data.map(getFullName);

        function getFullName(item, index) {

          return [item.label];
        }

        setActividades(lista)
       

      })
      .catch((error) => {
        console.warn("ha ocurrido un error", error)
      })

     
  }
  const CrearTareas = () => {
  
    let opcionesdelRequest1 = {
   
      method: "PUT",
      body: JSON.stringify([
        { label: "limpiar el cuarto", done: false },
        { label: "Make the bed", done: false },
        { label: "Walk the dog", done: false },
        { label: "Do the replits", done: false }
      
      ]),
      headers: {
        'content-type': 'application/json'

      }
    }

    fetch('https://assets.breatheco.de/apis/fake/todos/user/erickgz87', opcionesdelRequest1)
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);

        return response.json();
      })
      .then((data) => {
        console.log(data);

      

      })
      .catch((error) => {
        console.warn("ha ocurrido un error", error)
      })
  };
  const ActualizarTareas = () => {
    
    setActividades(actividades.concat(tareas))
    
    let opcionesdelRequest1 = {
      method: "PUT",
      body: JSON.stringify([
        { label:tareas, done: false },
        { label: "Make the bed", done: false },
        { label: "Walk the dog", done: false },
        { label: "Do the replits", done: false }
      
      ]),
      headers: {
        'content-type': 'application/json'

      }
    }

    fetch('https://assets.breatheco.de/apis/fake/todos/user/erickgz87', opcionesdelRequest1)
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);

        return response.json();
      })
      .then((data) => {
        console.log(data);

      })
      .catch((error) => {
        console.warn("ha ocurrido un error", error)
      })
  };

  

  const BorrarTareas = () => {

    let opcionesdelRequest1 = {
      method: "DELETE",
      headers: {
        'content-type': 'application/json'

      }
    }

    fetch('https://assets.breatheco.de/apis/fake/todos/user/erickgz87', opcionesdelRequest1)
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);

        return response.json();
      })
      .then((data) => {
        console.log(data);

      })
      .catch((error) => {
        console.warn("ha ocurrido un error", error)
      })
  };
  useEffect(()=>{
   
   CrearTareas()
    CargarTareas()
     
      }, [])
  return (
    <>

    <h1>Lista de Tareas</h1>

      {
        <ul>
          {(actividades.map((valor, indice) => {
            return (
              <li key={indice}>{valor}{'  '}</li>

            )
          }))}<br />
        </ul>
      }
 
      <input
            type="text"
            name="actividades"
            id="actividades"
            placeholder="Escribe aqui"
            classname="form-control"
            Value={tareas}
            onChange={(e) => setTareas(e.target.value)}
            
          /><br/>
         
         

      <button onClick={ActualizarTareas}>ActualizarTareas</button><br/>
      <button onClick={BorrarTareas}>Borrar Todo</button><br/>
      <button onClick={CargarTareas}>Cargar tareas</button>
     
    </>
  )
};

export default App;

