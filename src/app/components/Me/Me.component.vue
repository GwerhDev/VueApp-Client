<style scoped lang="scss" src="./Me.component.scss"/>
<script setup lang="ts"></script>

<template>
  <main class="main-container about-container">
    <section class="section-me section-container">
      <div class="profile-container">
        <img src="../../../assets/png/gwerhdev.png" width="150px" alt="profile picture">
        <h2>Gerardo Guarda</h2>
        <h3>Gwerh</h3>
        <i>Desarrollador Web Front-End</i>
      </div>
      <div class="mt-1 my-links-container">
        <span>Mis enlaces:</span>
        <ul class="d-flex fd-col ul-links">
          <a class="d-flex button-style" href="https://gwerh.netlify.app" target="_blank">
            <div class="icon-container-link">
              <img height="30" width="30" src="../../../assets/png/web-icon.png" alt="portoflio">
            </div>
            <div>
              <span>Portafolio</span>
            </div>
          </a>
          <a class="d-flex button-style" href="https://github.com/GwerhDev" target="_blank">
            <div class="icon-container-link">
              <img height="30" width="30" src="../../../assets/png/github-icon.png" alt="portoflio">
            </div>
            <div>
              <span>GitHub</span>
            </div>
          </a>
          <a class="d-flex button-style" href="https://www.linkedin.com/in/gwerhdev/" target="_blank">
            <div class="icon-container-link">
              <img height="30" width="30" src="../../../assets/png/linkedin-icon.png" alt="portoflio">
            </div>
            <div>
              <span>LinkedIn</span>
            </div>
          </a>
        </ul>

      </div>
    </section>
    <section class="section-test section-container">
      <h3>Prueba Técnica para Desarrollador Front-End</h3>
      <span>
        <h4>Objetivo: </h4>
        Evaluar tus habilidades en el desarrollo front-end, específicamente con Vue.js, <i>Pinia, Axios y TypeScript</i>, así como tu capacidad para crear interfaces de usuario atractivas y funcionales. <br>
        <br>
        <h4>Instrucciones:</h4>
        <div>
          <u>Interfaz de Usuario:</u>
  
          Diseña y desarrolla una página simple que muestre una lista de artículos. Cada artículo debe tener un título, una breve descripción y un botón para ver más detalles.
          La interfaz debe ser responsiva y estilizada con CSS. Puedes usar preprocesadores si lo prefieres, recomendación usar TailwindCSS aunque eres libre de no hacerlo.
          <br>
          <u>Integración con API:</u>
  
          Utiliza Axios para consumir datos de la siguiente API gratuita: https://jsonplaceholder.typicode.com/posts
          Muestra los primeros 10 artículos en la lista.
          <br>
          <u>Manejo de Estados con Pinia:</u>
  
          Crea una tienda con Pinia para gestionar el estado de los artículos.
          Al hacer clic en el botón de "ver más detalles" de un artículo, muestra una vista detallada del mismo, utilizando el estado gestionado por Pinia.
          <br>
          <u>Uso de TypeScript:</u>
          
          Asegúrate de que tu proyecto esté configurado con TypeScript y utiliza tipos adecuados para tus datos y funciones.
          <br>
          <u>Bonus (opcional):</u>
          
          Añade una función de búsqueda para filtrar los artículos por título.
          Implementa una paginación sencilla para la lista de artículos.
          Crear testing para las funcionalidades respectivas.
        </div>
        <br>
  
        <h4>Entrega:</h4>
        Sube tu proyecto a un repositorio en GitHub y comparte el enlace con nosotros.
        Asegúrate de incluir un README con instrucciones sobre cómo ejecutar tu proyecto, si lleva variables de entorno y todas las configuraciones respectivas.
        <br>
        <h4>Evaluación:</h4>
        
        Calidad y claridad del código.
        Funcionalidad de la interfaz y experiencia del usuario.
        Uso adecuado de las tecnologías solicitadas.
        Atención a los detalles y acabado del proyecto.
        <br>
  
        <h3>Esperamos que disfrutes realizando esta prueba. ¡Buena suerte y esperamos ver tu solución!</h3>
  
      </span>
    </section>
  </main>
</template>
