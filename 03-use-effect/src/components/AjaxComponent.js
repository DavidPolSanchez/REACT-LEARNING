
import React ,{ useState } from 'react'

export const AjaxComponent = () => {
    const [usuarios,setUsuarios] = useState([]);

    //Generico basico 
    const getUsuariosEstatico = ()=>{
        setUsuarios([
            {
                "id": 7,
                "email":"davidpol@gmail.com",
                "first_name": "davidpol",
                "last_name": "sanchez"
            },  
            {
                "id": 1,
                "email":"andreu@gmail.com",
                "first_name": "andreu",
                "last_name": "lopez"
               
            }
        ])
    }
  return (
    <div>
       <h2> Listado de unsuarios via - AjaxComponent</h2>
       <button onClick={getUsuariosEstatico} >defecto</button>
       <ul className='usuarios'>
        {usuarios.map(usuario =>{
            console.log(usuario);
            return <li key={usuario.id}>datos:{usuario.email}</li>
        })}

       </ul>
    </div>
  )
}
