# Adopet

<div align="center">
  <!-- <a>
    <img src="/front/public/logo.png" alt="Descripción de la imagen" width="50%">
  </a> -->
  <h3 align="center"> Bienvenido a Adopet </h3>
</div>

## Introducción

<dl>
  <dd>
    <b>Adopet</b>
    es una aplicación web que permite a las personas encontrar a la mascota que se adapte a sus preferencias para poder adoptarlas. Al mismo tiempo, permite a los refugios de animales poner a disposición a los animales que han salvado para que puedan ser adoptados y poder disfrutar de un buen hogar.
  </dd>
</dl>
<br/>

## Objetivo principal

<dl>
  <dd>
    El objetivo principal es que los usuarios tengan facilidad de adoptar una mascota que se adapte a sus preferencias las cuales provienen de refugios de animales.
  </dd>
</dl>
<br/>

## Características

<dl>
  <dd>
    ✅ Búsqueda y Filtros Avanzados
  </dd>
  <dd>
    ✅ Perfiles Detallados de Mascotas
  </dd>
</dl>
<br>

## Funcionalidades

<dl>
  <dd>
    <dl>
      <dd>
        <p>✅ Búsqueda Inteligente de Mascotas </p>
      </dd>
      <dd>
        <p>✅ Registro y gestión de mascotas en adopción </p>
      </dd>
      <dd>
        <p>✅ Seguridad y gestión de la plataforma</p>
      </dd>
    </dl>
  </dd>
</dl>
<br>

## 🛠️ Teconologías

<table>
  <thead>
    <tr>
      <th>Front-End</th>
      <th>Back-End</th>
      <th>Gestión</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img alt="javascript" src="https://img.shields.io/badge/Javascript-%23F7DF1E?logo=javascript&logoColor=white">
      </td>
      <td>
      <img alt="node.js" src="https://img.shields.io/badge/Node.js-%23339933?logo=node.js&logoColor=white">
      </td>
      <td>
        <img alt="trello" src="https://img.shields.io/badge/Trello-%230052CC?logo=trello&logoColor=white">
      </td>
    </tr>
    <tr>
      <td>
        <img alt="react.js" src="https://img.shields.io/badge/React.js-%2361DAFB?logo=react&logoColor=white">
      </td>
      <td>
        <img alt="express.js" src="https://img.shields.io/badge/Express.js-%23000000?logo=Express&logoColor=white">
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <img alt="vite" src="https://img.shields.io/badge/Vite-%23646CFF?logo=vite&logoColor=white">
      </td>
      <td>
        <img alt="mysql" src="https://img.shields.io/badge/MySQL-%2300758f?logo=mysql&logoColor=white">
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <img alt="tailwind" src="https://img.shields.io/badge/Tailwind-%2306B6D4?logo=tailwind%20css&logoColor=white">
      </td>
      <td>
        <img alt="json-web-tokens" src="https://img.shields.io/badge/JSON%20Web%20Tokens-%23000000?logo=json%20web%20tokens&logoColor=white">
      </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
<br>

<h1 align="center"> 
  🧑‍🤝‍🧑 Team
</h1>

<dl>
  <dd>
    <h3>⚛️ Front-End</h3>
    <dl>
      <dd>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Github</th>
              <th>Linkedin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>William Polanco</td>
              <td>
                <a href="https://github.com/williampolancodev">
                  <img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                </a>
              </td>
              <td>
                <a href="https://www.linkedin.com/in/william-polanco-abbba7140/">
                  <img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
  </dd>
  <dd>
    <h3>💻 Back-End</h3>
    <dl>
      <dd>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Github</th>
              <th>Linkedin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos Silva</td>
              <td>
                <a href="https://github.com/CarlosAlecrim">
                  <img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                </a>
              </td>
              <td>
                <a href="https://www.linkedin.com/in/carlos-silva-alecrim/">
                  <img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
  </dd>

## Comandos


- Backend

git clone https://github.com/No-Country-simulation/c20-42-n-node-react


cd c20-42-n-node-react/Backend/api/

npm i

Renombrar el archivo env-example para .env y modificar si necesario las informaciones relacionados a su base de datos.

Crea su base de datos manualmente de acordo com los datos informados en el archivo .env

Aplicar las migraciones con este comando: npx sequelize-cli db:migrate 

npm start


- FrontEnd

cd c20-42-n-node-react/Frontend/Adopet

npm i 

Renombrar el archivo env-example para .env y agregar a variavel de entorno VITE_BACKEND_URL com la url de backend configurada anteriormente, por ejemplo http://localhost:3000.

npm run dev
