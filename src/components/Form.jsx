import "../styles/Form.css";
import { useState } from "react";
// import Spinner from "./Spinner";

export default function Form() {

    const initialForm = {
        nombre: "",
        organizacion: "",
        email:"",
        servicio: "",
        mensaje:""
    }
    const [form, setForm] = useState(initialForm);

    // const initialMessage = {
    //     message: "",
    //     color: ""
    // }
    // const [message, setMessage] = useState(initialMessage);


    // const initialSpinner = false

    // const [stateSpinner, setStateSpinner] = useState(initialSpinner);

    const cleanFields = () => {
      setForm(initialForm)
    }

    const onInputChange = ( {target} )=> {

        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        })

        // setMessage(initialMessage)
    }

    // const validateFields = () => {

    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (form.nombre.length < 4) {

    //         setMessage({

    //             message: "Ingrese un nombre mayor a 4 letras",
    //             color: "red"
    //         });

    //         return false
    //     }
    //     else if(!(regex.test(form.email))) {
    //         setMessage({

    //             message: "Ingresa un correo electronico valido",
    //             color: "red"
    //         });
    //         return false;
    //     }
    //     else if(!/^[0-9]+$/.test(form.telefono)) {

    //         setMessage({

    //             message: "Ingresa solo numeros en el telefono",
    //             color: "red"
    //         });

    //         return false
    //     }
    //     else if(form.mensaje.length < 5) {
            
    //         setMessage({
    //             message: "Ingrese un texto mayor a 5 digitos",
    //             color: "red"
    //         });

    //     }
    //     else {

    //         return true
    //     }
    // }



        const submit = async (e) => {

            e.preventDefault();
            try {   

                    // const isOk = validateFields(form)

                    // if(isOk) {

                        let objectSubmit = {
        
                            method : "POST",
                            body : JSON.stringify(form),
                            headers : {
                                "Content-type" : "application/json",
                                "Accept": "aplication/json"
                            } 
                        }

                        console.log(objectSubmit.body)

                        // setStateSpinner(true)

                        // const JSONSubmit = await fetch("https://formsubmit.co/ajax/essencecrew.bookings@gmail.com",objectSubmit);
                        // const data = await JSONSubmit.json();
                        // setStateSpinner(false)

                        // if(data.success) {


                        //     setMessage({
                        //         message: "Mensaje Enviado",
                        //         color: "green"
                        //     })
                        //     cleanFields();


                        // } else {
                        //         setMessage({
                        //         message: "Mensaje no enviado",
                        //         color: "red"
                        //     })
                        // }
                    // } 

            } catch {
                        // setMessage({
                        //     message: "Error de coenxion",
                        //     color: "red"
                        // })
            }
    }
    return(
      <form className="contact-form reveal reveal-delay-1" action="https://formsubmit.co/aurora.ambiente@gmail.com" method="POST" id="submit-form-contactus">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Tu nombre" name="nombre" onChange={ onInputChange }/>
          </div>
          <div className="form-group">
            <label htmlFor="org">Organización</label>
            <input type="text" id="organizacion" placeholder="Tu organización" name="organizacion" onChange={ onInputChange }/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="tu@email.com" name="email" onChange={ onInputChange } />
        </div>
        <div className="form-group">
          <label htmlFor="servicio">Servicio de interés</label>
          <select id="servicio" name="servicio" onChange={ onInputChange }>
            <option value="">Seleccioná una opción</option>
            <option>Geopolítica Ambiental</option>
            <option>Gobernanza Climática</option>
            <option>Medición MRV & Metano</option>
            <option>Huella de Carbono</option>
            <option>Plan GIRSU & Economía Circular</option>
            <option>Educación Ambiental</option>
            <option>Mitigación & Adaptación</option>
            <option>Manejo del Agua</option>
            <option>Sistemas Agroecológicos</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" placeholder="Contanos sobre tu proyecto u organización..." name="mensaje" onChange={ onInputChange }></textarea>
        </div>
        <button type="submit" className="btn-submit" onClick={ submit }>Enviar consulta</button>
      </form>
      )
            
}