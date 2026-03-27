import "../styles/Form.css";
import { useState } from "react";


export default function Form() {


return(
  <form class="contact-form reveal reveal-delay-1" action="https://formsubmit.co/aurora.ambiente@gmail.com" method="POST" id="submit-form-contactus">
    <div class="form-row">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="form-nombre" placeholder="Tu nombre" />
      </div>
      <div class="form-group">
        <label for="org">Organización</label>
        <input type="text" id="form-org" placeholder="Tu organización" />
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="form-email" placeholder="tu@email.com" />
    </div>
    <div class="form-group">
      <label for="servicio">Servicio de interés</label>
      <select id="form-servicio">
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
    <div class="form-group">
      <label for="mensaje">Mensaje</label>
      <textarea id="form-mensaje" placeholder="Contanos sobre tu proyecto u organización..."></textarea>
    </div>
    <button type="submit" class="btn-submit">Enviar consulta</button>
  </form>
  )
            
}