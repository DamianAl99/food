(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/assets/css/styles.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ":root{\r\n    --titlePrincipal: 'Dancing Script', cursive;\r\n    --subTitle:  verdana;\r\n    --subrayado: rgba(241, 196, 15, 1.0);\r\n    --titleColor: black;\r\n    --subTitleColor: rgb(114, 19, 19);\r\n    --fondoBlanco: rgba(255, 255, 255, 0.8)\r\n}\r\n/*reset*/\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n/*estilos generales*/\r\nbody{\r\n    background: white;\r\n    font-family: var(--subTitle);\r\n    overflow-x: hidden;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n/*cabecera*/\r\nnav{\r\n    width: 100%;\r\n    height: 60px;\r\n    background: white;\r\n    box-shadow: 0px 0px 4px black;\r\n    position: relative;\r\n    z-index: 99;\r\n}\r\n.icon-menu{\r\n    display: none;\r\n}\r\nnav .menu ul{\r\n    width: 80%;\r\n    height: 60px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    overflow: hidden;\r\n}\r\nnav .menu ul li{\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n    /*tamano normal de la letra del menu*/\r\n    line-height: 56px;\r\n    transition: 0.2s;\r\n}\r\nnav .menu ul li a{\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    color: var(--titleColor);\r\n}\r\nnav .menu ul li:hover, \r\nnav .menu ul li.actived{\r\n    border-bottom: 4px solid var(--subrayado);\r\n    cursor: pointer;\r\n}\r\nnav .menu ul li.actived{\r\n    -webkit-animation: menuHover 0.8s;\r\n            animation: menuHover 0.8s;\r\n    font-size: 1.5em;\r\n    /*tamano cuando se hace click al menu*/\r\n}\r\n/*logo*/\r\nnav .menu ul li.logo{\r\n    border-radius: 50px;\r\n    box-shadow: 0px 0px 4px var(--subrayado);\r\n    font-size: 1.9em;\r\n    /*letra y tamano del logo*/\r\n    font-family: var(--titlePrincipal);\r\n}\r\nnav .menu ul li.logo:hover{\r\n    border: none;\r\n    box-shadow: 0px 0px 8px var(--subrayado);\r\n}\r\n/*contenedor principal*/\r\n.contentAll{\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: absolute;\r\n    top: 0;\r\n    \r\n}\r\n/*home*/\r\n.content-home{\r\n    width: 100%;\r\n    min-height: 500px;\r\n    height: 100vh;\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    background: reddd;\r\n}\r\n.content-home .text-home{\r\n    background: orangee;\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.content-home .text-home .text{\r\n    background: greenn;\r\n    width: 30%;\r\n    margin: 120px 5%;\r\n}\r\n.content-home .text-home .text h1{\r\n    font-size: 7em;\r\n    /*texto principal, tamano*/\r\n    font-family: var(--titlePrincipal);\r\n}\r\n.content-home .img-home{\r\n    background: greenn;\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.content-home .img-home .img{\r\n    overflow: hidden;\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 100%;\r\n    margin: 160px auto;\r\n    box-shadow: 0px 0px 8px black;\r\n    -webkit-animation: imgGiro 8s infinite;\r\n            animation: imgGiro 8s infinite;\r\n}\r\n.content-home .img-home .img img{\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: scale(2);\r\n}\r\n/*--------------------------------------------*/\r\n/*popular*/\r\n.content-popular{\r\n    background: pinkk;\r\n    width: 100%;\r\n    min-height: 600px;\r\n    height: 100vh;\r\n    max-height: 600px;\r\n    position: fixed;\r\n}\r\n.absolute-popular{\r\n    position: absolute;\r\n}\r\n/*text POPULAR*/\r\n.content-popular .principal-popular{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: redd;\r\n    display: grid;\r\n    align-items: center;\r\n    position: absolute;\r\n}\r\n.content-popular .principal-popular .text-popular{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: var(--titlePrincipal);\r\n    font-size: 3.4em;\r\n    text-shadow: 0px 0px 8px var(--subrayado);\r\n}\r\n/*contenido,texto, img, title de popular*/\r\n.content-popular .foods{\r\n    width: 100%;\r\n    top: 100vh;\r\n    padding-top: 4vh;\r\n    /*para que no se interponga el boton con el texto*/\r\n    height: auto;\r\n    position: absolute;\r\n    background: white;\r\n    transition: 1s linear;\r\n}\r\n.showFoods{\r\n    display: block;\r\n    transform: translateY(-85vh);\r\n    /*85 para que no se interponga el menu y este div*/\r\n}\r\n.content-popular .foods .content-subtext{\r\n    width: 95%;\r\n    background: orangee;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\r\n.content-popular .foods .content-subtext .title{\r\n    text-align: center;\r\n    font-family: var(--titlePrincipal);\r\n    font-size: 2em;\r\n}\r\n.content-popular .foods .content-subtext .img{\r\n    background: redd;\r\n    width: 170px;\r\n    height: 170px;\r\n    border-radius: 100px;\r\n    margin: 10px auto;\r\n    overflow: hidden;\r\n    box-shadow: 0px 0px 14px black;\r\n}\r\n.content-popular .foods .content-subtext .img img{\r\n    transform: scale(1.5);\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.content-popular .foods .content-subtext .subtext{\r\n    width: 100%;\r\n    height: auto;\r\n    background: greenn;\r\n    padding: 10px 0;\r\n    text-align: justify;\r\n    \r\n}\r\n/*tutorial*/\r\n.content-tutorial{\r\n    background: pinkk;\r\n    width: 100%;\r\n    height: 100vh;\r\n    min-height: 600px;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n/*tutorial title*/\r\n.content-tutorial .tutorial-title{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    align-items: center;\r\n    font-size: 3.4em;\r\n}\r\n.content-tutorial .tutorial-title h2{\r\n    width: 100%;\r\n    font-family: var(--titlePrincipal);\r\n    text-align: center;\r\n    text-shadow: 0px 0px 8px var(--subrayado);\r\n}\r\n/*tutorial videos*/\r\n.content-tutorial .videos-tutoriales{\r\n    background: white;\r\n    width: 100%;\r\n    top: 17vh;\r\n    margin: auto;\r\n    height: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 40px;\r\n    position: fixed;\r\n    transition: 1s all;\r\n    opacity: 0;\r\n    display: none;\r\n}\r\n.showTutoriales.showTutoriales{\r\n    opacity: 1;\r\n    display: grid;\r\n    -webkit-animation: tutorial 1s linear;\r\n            animation: tutorial 1s linear;\r\n    position: absolute;\r\n    transform: translateX(0);\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales{\r\n    background: orangee;\r\n    width: 95%;\r\n    height: 250px;\r\n    margin: auto;\r\n    box-shadow: 0px 0px 8px #ccc;\r\n    border-radius: 2px;\r\n    transition: 0.5s linear;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales:hover{\r\n    box-shadow: 0px 0px 14px #ccc;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video{\r\n    width: 100%;\r\n    height: 80%;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    background: yelloww;\r\n    border-radius: 2px;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video img{\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: scale(2);\r\n    transition: 0.5s all;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video img:hover{\r\n    transform: scale(2.2);\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video-descripcion{\r\n    text-align: center;\r\n    color: black;\r\n}\r\n/*contacto*/\r\n.content-contact{\r\n    background: pinkk;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n.content-contact .contact{\r\n    background: redd;\r\n    width: 95%;\r\n    height: 75vh;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    align-items: center;\r\n}\r\n.content-contact .contact .img{\r\n    background: orange;\r\n    width: 170px;\r\n    height: 170px;\r\n    margin: auto;\r\n    border-radius: 100px;\r\n    box-shadow: 0px 0px 15px black;\r\n}\r\n.content-contact .contact .info{\r\n    background: greenn;\r\n    text-align: center;\r\n    font-family: var(--titlePrincipal);\r\n    font-size: 2.5em;\r\n}\r\n/*footer*/\r\n.content-contact footer{\r\n    background: var(--subrayado);\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 40px 0px 0px 0px;\r\n}\r\n.content-contact footer .redes-sociales{\r\n    margin: auto;\r\n    background: orangee;\r\n    width: 70%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    text-align: center;\r\n}\r\n.content-contact footer .redes-sociales div{\r\n    display: grid;\r\n    align-items: center;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n.content-contact footer .redes-sociales div a{\r\n    color: black;\r\n}\r\n.curriculum{\r\n    border: 1px solid var(--subrayado);\r\n    border-radius: 5px 5px 5px 15px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    transition: 0.5s all;\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.curriculum:hover{\r\n    background: white;\r\n}\r\n.content-contact footer .redes-sociales div i{\r\n    font-size: 2.5em;\r\n}\r\n/*button de popular y tutoriales*/\r\n.content-button{\r\n    background: transparent;\r\n    width: 100%;\r\n    z-index: 200;\r\n    position: absolute;\r\n    top: 80vh;\r\n    transition: linear;\r\n}\r\n.content-button .button{\r\n    text-align: center;\r\n    padding: 10px;\r\n    width: 150px;\r\n    background: transparent;\r\n    box-shadow: 0px 1px 8px var(--subrayado);\r\n    margin: auto;\r\n    border-radius: 50px;    \r\n    cursor: pointer;\r\n}\r\n.topButton{\r\n    -webkit-animation: topButton 1.2s linear;\r\n            animation: topButton 1.2s linear;\r\n    transform: translateY(-70vh);\r\n    /*80 es su top porque en el content button el div pusimos a 80vh del top y al restar -80vh se queda al borde del top*/\r\n}\r\n.content-button .button:hover{\r\n    background: var(--subrayado);\r\n    \r\n}\r\n.content-button .button p{\r\n    font-family: var(--subTitle);\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n/*tamano para moviles*/\r\n@media only screen and (min-device-width : 0px) and (max-device-width : 320px){\r\n    /*header nav*/\r\n    nav{\r\n        height: 500px;\r\n        width: 80%;\r\n        background: var(--fondoBlanco);\r\n        margin-top: 0;\r\n        transform: rotate(190deg);\r\n        transform-origin: top left;\r\n        transition: 1s all linear;\r\n        position: fixed;\r\n    }\r\n    .showMenu{\r\n        transform: rotate(0deg);\r\n    }\r\n    nav .menu{\r\n        height: auto;\r\n    }\r\n    nav .menu ul{\r\n        width: 100%;\r\n        height: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n    nav .menu ul li.logo{\r\n        grid-row: 1;\r\n        box-shadow: 2px 0px 10px var(--subrayado);\r\n        border-radius: 0;\r\n    }\r\n\r\n    /*icon*/\r\n    .icon-menu{\r\n        display: block;\r\n    }\r\n    .icon-menu i{\r\n        z-index: 144;\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 20px;\r\n        color: black;\r\n        font-size: 2.5em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*home*/\r\n    .content-home{\r\n        min-height: 400px;\r\n        height: 100vh;\r\n        background: pinkk;\r\n        grid-template-columns: 1fr;/*este*/\r\n        grid-template-rows: 1fr 1fr;/*este*/\r\n        align-items: center;\r\n    }\r\n    .content-home .text-home{\r\n        background: redd;\r\n        display: grid;\r\n        align-items: bottom;\r\n    }\r\n    .content-home .text-home .text{\r\n        width: 90%;/*este*/\r\n        margin: 40px auto;/*este*/\r\n        background: orangee;\r\n    }\r\n    .content-home .text-home .text h1{\r\n        font-size: 4.5em;\r\n        text-align: center;\r\n    }\r\n    .content-home .img-home{\r\n        background: greenn;\r\n    }\r\n    .content-home .img-home .img{\r\n        background: yelloww;\r\n        width: 150px;/*este*/\r\n        height: 150px;/*este*/;\r\n        margin: 80px auto;/*este*/\r\n    }\r\n}\r\n/*--------------------------------------------*/\r\n@media only screen and (min-device-width : 321px) and (max-device-width : 474px){\r\n    /*header nav*/\r\n    nav{\r\n        height: 500px;\r\n        width: 80%;\r\n        background: var(--fondoBlanco);\r\n        margin-top: 0;\r\n        transform: rotate(190deg);\r\n        transform-origin: top left;\r\n        transition: 1s all linear;\r\n    }\r\n    .showMenu{\r\n        transform: rotate(0deg);\r\n    }\r\n    nav .menu{\r\n        height: auto;\r\n    }\r\n    nav .menu ul{\r\n        width: 100%;\r\n        height: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n    nav .menu ul li.logo{\r\n        grid-row: 1;\r\n        box-shadow: 2px 0px 10px var(--subrayado);\r\n        border-radius: 0;\r\n    }\r\n\r\n    /*icon*/\r\n    .icon-menu{\r\n        display: block;\r\n    }\r\n    .icon-menu i{\r\n        z-index: 144;\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 20px;\r\n        color: black;\r\n        font-size: 2.5em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*home*/\r\n    .content-home{\r\n        height: 100vh;\r\n        min-height: 400px;\r\n        background: orangee;\r\n        grid-template-columns: 1fr;/*este*/\r\n        grid-template-rows: 1fr 1fr;/*este*/\r\n    }\r\n    .content-home .text-home{\r\n        background: orangee;\r\n    }\r\n    .content-home .text-home .text{\r\n        width: 75%;/*este*/\r\n        margin: 50px auto;/*este*/\r\n        background: redd;\r\n    }\r\n    .content-home .text-home .text h1{\r\n        font-size: 5em;\r\n        text-align: center;\r\n    }\r\n    .content-home .img-home{\r\n        background: greenn;\r\n    }\r\n    .content-home .img-home .img{\r\n        width: 170px;/*este*/\r\n        height: 170px;/*este*/;\r\n        margin: auto;/*este*/\r\n    }\r\n}\r\n/*----------------------------------------*/\r\n@media only screen and (min-device-width : 475px) and (max-device-width : 639px){\r\n    /*header nav*/\r\n    nav{\r\n        height: 500px;\r\n        width: 80%;\r\n        background: var(--fondoBlanco);\r\n        margin-top: 0;\r\n        transform: rotate(190deg);\r\n        transform-origin: top left;\r\n        transition: 1s all linear;\r\n    }\r\n    .showMenu{\r\n        transform: rotate(0deg);\r\n    }\r\n    nav .menu{\r\n        height: auto;\r\n    }\r\n    nav .menu ul{\r\n        width: 100%;\r\n        height: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n    nav .menu ul li.logo{\r\n        grid-row: 1;\r\n        box-shadow: 2px 0px 10px var(--subrayado);\r\n        border-radius: 0;\r\n    }\r\n\r\n    /*icon*/\r\n    .icon-menu{\r\n        display: block;\r\n    }\r\n    .icon-menu i{\r\n        z-index: 144;\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 20px;\r\n        color: black;\r\n        font-size: 2.5em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*home*/\r\n    .content-home{\r\n        height: 100vh;\r\n        min-height: 400px;\r\n        background: greenn;\r\n        grid-template-columns: 1fr;/*este*/\r\n        grid-template-rows: 1fr 1fr;/*este*/\r\n    }\r\n    .content-home .text-home{\r\n        background: orangee;\r\n    }\r\n    .content-home .text-home .text{\r\n        width: 50%;/*este*/\r\n        margin: 50px auto;/*este*/\r\n        background: redd;\r\n    }\r\n    .content-home .text-home .text h1{\r\n        font-size: 5em;\r\n        text-align: center;\r\n    }\r\n    .content-home .img-home{\r\n        background: greenn;\r\n    }\r\n    .content-home .img-home .img{\r\n        width: 200px;/*este*/\r\n        height: 200px;/*este*/;\r\n        margin: auto;/*este*/\r\n    }\r\n   \r\n\r\n}\r\n@media only screen and (min-device-width : 475px){\r\n    .content-tutorial .videos-tutoriales{\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-gap: 5px;\r\n    }\r\n    /*contact*/\r\n    .content-contact .contact{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    .content-contact footer .redes-sociales{\r\n        width: 90%;\r\n        height: 60px;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n@media only screen and (min-device-width : 950px){\r\n    .content-home .text-home .text{\r\n        width: 30%;\r\n        margin: 120px 15%;\r\n        background: redd;\r\n    }\r\n    .content-popular .foods .content-subtext{\r\n        width: 95%;\r\n        background: orangee;\r\n        margin: auto;\r\n        display: grid;\r\n        grid-template-columns: 300px 1fr;\r\n    }\r\n    .content-popular .foods .content-subtext .title{\r\n        grid-column: 1/3;\r\n    }\r\n\r\n    .content-tutorial .videos-tutoriales{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-gap: 20px;\r\n    }\r\n}\r\n/*animaciones*/\r\n/*menu*/\r\n@-webkit-keyframes menuHover {\r\n    0%{\r\n        background: var(--subrayado);\r\n        font-size: 0.5em;\r\n    }\r\n    50%{\r\n        font-size: 1.7em;\r\n    }\r\n    100%{\r\n        background: white;\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n@keyframes menuHover {\r\n    0%{\r\n        background: var(--subrayado);\r\n        font-size: 0.5em;\r\n    }\r\n    50%{\r\n        font-size: 1.7em;\r\n    }\r\n    100%{\r\n        background: white;\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n@-webkit-keyframes imgGiro {\r\n    0%{\r\n        transform: rotate(0);\r\n    }\r\n    50%{\r\n        box-shadow: 5px 5px 15px black;\r\n    }\r\n    100%{\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes imgGiro {\r\n    0%{\r\n        transform: rotate(0);\r\n    }\r\n    50%{\r\n        box-shadow: 5px 5px 15px black;\r\n    }\r\n    100%{\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n@-webkit-keyframes aniMenu {\r\n    0%{\r\n        transform: rotate(190deg);\r\n    }\r\n    100%{\r\n        transform: rotate(0deg);\r\n    }\r\n}\r\n@keyframes aniMenu {\r\n    0%{\r\n        transform: rotate(190deg);\r\n    }\r\n    100%{\r\n        transform: rotate(0deg);\r\n    }\r\n}\r\n@-webkit-keyframes ejopy{\r\n    0%{\r\n        transform: translateY(0vh);\r\n    }\r\n    100%{\r\n        transform: translateY(-100vh);\r\n    }\r\n}\r\n@keyframes ejopy{\r\n    0%{\r\n        transform: translateY(0vh);\r\n    }\r\n    100%{\r\n        transform: translateY(-100vh);\r\n    }\r\n}\r\n@-webkit-keyframes topButton{\r\n    0%{\r\n        transform: translateY(0vh);\r\n    }\r\n    20%{\r\n        transform: translateY(-70vh);\r\n    }\r\n    40%{\r\n        transform: translateY(-55vh);\r\n    }\r\n    60%{\r\n        transform: translateY(-70vh);\r\n    }\r\n    80%{\r\n        transform: translateY(-65vh);\r\n    }\r\n    100%{\r\n        transform: translateY(-70vh);\r\n\r\n    }\r\n}\r\n@keyframes topButton{\r\n    0%{\r\n        transform: translateY(0vh);\r\n    }\r\n    20%{\r\n        transform: translateY(-70vh);\r\n    }\r\n    40%{\r\n        transform: translateY(-55vh);\r\n    }\r\n    60%{\r\n        transform: translateY(-70vh);\r\n    }\r\n    80%{\r\n        transform: translateY(-65vh);\r\n    }\r\n    100%{\r\n        transform: translateY(-70vh);\r\n\r\n    }\r\n}\r\n@-webkit-keyframes tutorial{\r\n    0%{\r\n        transform: translateX(-150%);\r\n    }\r\n    50%{\r\n        transform: translateX(20%);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@keyframes tutorial{\r\n    0%{\r\n        transform: translateX(-150%);\r\n    }\r\n    50%{\r\n        transform: translateX(20%);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@-webkit-keyframes a{\r\n    0%{\r\n        transform: translateX(-150%);\r\n        background: var(--subrayado);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n        background: var(--subrayado);\r\n    }\r\n}\r\n@keyframes a{\r\n    0%{\r\n        transform: translateX(-150%);\r\n        background: var(--subrayado);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n        background: var(--subrayado);\r\n    }\r\n}\r\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"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tB;IACA;QACI,YAAY,CAAC,OAAO;QACpB,aAAa,CAAC,OAAO;QACrB,YAAY,CAAC,OAAO;IACxB;;;AAGJ;AACA;IACI;QACI,8BAA8B;QAC9B,aAAa;IACjB;IACA,UAAU;IACV;QACI,8BAA8B;IAClC;IACA;QACI,UAAU;QACV,YAAY;QACZ,kCAAkC;IACtC;AACJ;AACA;IACI;QACI,UAAU;QACV,iBAAiB;QACjB,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,mBAAmB;QACnB,YAAY;QACZ,aAAa;QACb,gCAAgC;IACpC;IACA;QACI,gBAAgB;IACpB;;IAEA;QACI,kCAAkC;QAClC,cAAc;IAClB;AACJ;AAcA,cAAc;AACd,OAAO;AACP;IACI;QACI,4BAA4B;QAC5B,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;AACJ;AAZA;IACI;QACI,4BAA4B;QAC5B,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,8BAA8B;IAClC;IACA;QACI,yBAAyB;IAC7B;AACJ;AAVA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,8BAA8B;IAClC;IACA;QACI,yBAAyB;IAC7B;AACJ;AACA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,uBAAuB;IAC3B;AACJ;AAPA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,uBAAuB;IAC3B;AACJ;AACA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,6BAA6B;IACjC;AACJ;AAPA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,6BAA6B;IACjC;AACJ;AACA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;;IAEhC;AACJ;AApBA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;IAChC;IACA;QACI,4BAA4B;;IAEhC;AACJ;AACA;IACI;QACI,4BAA4B;IAChC;IACA;QACI,0BAA0B;IAC9B;IACA;QACI,wBAAwB;IAC5B;AACJ;AAVA;IACI;QACI,4BAA4B;IAChC;IACA;QACI,0BAA0B;IAC9B;IACA;QACI,wBAAwB;IAC5B;AACJ;AACA;IACI;QACI,4BAA4B;QAC5B,4BAA4B;IAChC;IACA;QACI,wBAAwB;QACxB,4BAA4B;IAChC;AACJ;AATA;IACI;QACI,4BAA4B;QAC5B,4BAA4B;IAChC;IACA;QACI,wBAAwB;QACxB,4BAA4B;IAChC;AACJ","file":"styles.css","sourcesContent":[":root{\r\n    --titlePrincipal: 'Dancing Script', cursive;\r\n    --subTitle:  verdana;\r\n    --subrayado: rgba(241, 196, 15, 1.0);\r\n    --titleColor: black;\r\n    --subTitleColor: rgb(114, 19, 19);\r\n    --fondoBlanco: rgba(255, 255, 255, 0.8)\r\n}\r\n/*reset*/\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\n/*estilos generales*/\r\nbody{\r\n    background: white;\r\n    font-family: var(--subTitle);\r\n    overflow-x: hidden;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n\r\n/*cabecera*/\r\nnav{\r\n    width: 100%;\r\n    height: 60px;\r\n    background: white;\r\n    box-shadow: 0px 0px 4px black;\r\n    position: relative;\r\n    z-index: 99;\r\n}\r\n.icon-menu{\r\n    display: none;\r\n}\r\nnav .menu ul{\r\n    width: 80%;\r\n    height: 60px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    overflow: hidden;\r\n}\r\nnav .menu ul li{\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n    /*tamano normal de la letra del menu*/\r\n    line-height: 56px;\r\n    transition: 0.2s;\r\n}\r\nnav .menu ul li a{\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    color: var(--titleColor);\r\n}\r\nnav .menu ul li:hover, \r\nnav .menu ul li.actived{\r\n    border-bottom: 4px solid var(--subrayado);\r\n    cursor: pointer;\r\n}\r\nnav .menu ul li.actived{\r\n    animation: menuHover 0.8s;\r\n    font-size: 1.5em;\r\n    /*tamano cuando se hace click al menu*/\r\n}\r\n/*logo*/\r\nnav .menu ul li.logo{\r\n    border-radius: 50px;\r\n    box-shadow: 0px 0px 4px var(--subrayado);\r\n    font-size: 1.9em;\r\n    /*letra y tamano del logo*/\r\n    font-family: var(--titlePrincipal);\r\n}\r\nnav .menu ul li.logo:hover{\r\n    border: none;\r\n    box-shadow: 0px 0px 8px var(--subrayado);\r\n}\r\n\r\n\r\n\r\n/*contenedor principal*/\r\n.contentAll{\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: absolute;\r\n    top: 0;\r\n    \r\n}\r\n\r\n/*home*/\r\n.content-home{\r\n    width: 100%;\r\n    min-height: 500px;\r\n    height: 100vh;\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    background: reddd;\r\n}\r\n.content-home .text-home{\r\n    background: orangee;\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.content-home .text-home .text{\r\n    background: greenn;\r\n    width: 30%;\r\n    margin: 120px 5%;\r\n}\r\n.content-home .text-home .text h1{\r\n    font-size: 7em;\r\n    /*texto principal, tamano*/\r\n    font-family: var(--titlePrincipal);\r\n}\r\n.content-home .img-home{\r\n    background: greenn;\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.content-home .img-home .img{\r\n    overflow: hidden;\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 100%;\r\n    margin: 160px auto;\r\n    box-shadow: 0px 0px 8px black;\r\n    animation: imgGiro 8s infinite;\r\n}\r\n.content-home .img-home .img img{\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: scale(2);\r\n}\r\n\r\n\r\n\r\n/*--------------------------------------------*/\r\n/*popular*/\r\n.content-popular{\r\n    background: pinkk;\r\n    width: 100%;\r\n    min-height: 600px;\r\n    height: 100vh;\r\n    max-height: 600px;\r\n    position: fixed;\r\n}\r\n.absolute-popular{\r\n    position: absolute;\r\n}\r\n/*text POPULAR*/\r\n.content-popular .principal-popular{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: redd;\r\n    display: grid;\r\n    align-items: center;\r\n    position: absolute;\r\n}\r\n.content-popular .principal-popular .text-popular{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: var(--titlePrincipal);\r\n    font-size: 3.4em;\r\n    text-shadow: 0px 0px 8px var(--subrayado);\r\n}\r\n\r\n\r\n/*contenido,texto, img, title de popular*/\r\n.content-popular .foods{\r\n    width: 100%;\r\n    top: 100vh;\r\n    padding-top: 4vh;\r\n    /*para que no se interponga el boton con el texto*/\r\n    height: auto;\r\n    position: absolute;\r\n    background: white;\r\n    transition: 1s linear;\r\n}\r\n.showFoods{\r\n    display: block;\r\n    transform: translateY(-85vh);\r\n    /*85 para que no se interponga el menu y este div*/\r\n}\r\n\r\n.content-popular .foods .content-subtext{\r\n    width: 95%;\r\n    background: orangee;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\r\n.content-popular .foods .content-subtext .title{\r\n    text-align: center;\r\n    font-family: var(--titlePrincipal);\r\n    font-size: 2em;\r\n}\r\n.content-popular .foods .content-subtext .img{\r\n    background: redd;\r\n    width: 170px;\r\n    height: 170px;\r\n    border-radius: 100px;\r\n    margin: 10px auto;\r\n    overflow: hidden;\r\n    box-shadow: 0px 0px 14px black;\r\n}\r\n.content-popular .foods .content-subtext .img img{\r\n    transform: scale(1.5);\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.content-popular .foods .content-subtext .subtext{\r\n    width: 100%;\r\n    height: auto;\r\n    background: greenn;\r\n    padding: 10px 0;\r\n    text-align: justify;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*tutorial*/\r\n.content-tutorial{\r\n    background: pinkk;\r\n    width: 100%;\r\n    height: 100vh;\r\n    min-height: 600px;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n/*tutorial title*/\r\n.content-tutorial .tutorial-title{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    align-items: center;\r\n    font-size: 3.4em;\r\n}\r\n.content-tutorial .tutorial-title h2{\r\n    width: 100%;\r\n    font-family: var(--titlePrincipal);\r\n    text-align: center;\r\n    text-shadow: 0px 0px 8px var(--subrayado);\r\n}\r\n\r\n/*tutorial videos*/\r\n.content-tutorial .videos-tutoriales{\r\n    background: white;\r\n    width: 100%;\r\n    top: 17vh;\r\n    margin: auto;\r\n    height: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 40px;\r\n    position: fixed;\r\n    transition: 1s all;\r\n    opacity: 0;\r\n    display: none;\r\n}\r\n.showTutoriales.showTutoriales{\r\n    opacity: 1;\r\n    display: grid;\r\n    animation: tutorial 1s linear;\r\n    position: absolute;\r\n    transform: translateX(0);\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales{\r\n    background: orangee;\r\n    width: 95%;\r\n    height: 250px;\r\n    margin: auto;\r\n    box-shadow: 0px 0px 8px #ccc;\r\n    border-radius: 2px;\r\n    transition: 0.5s linear;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales:hover{\r\n    box-shadow: 0px 0px 14px #ccc;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video{\r\n    width: 100%;\r\n    height: 80%;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    background: yelloww;\r\n    border-radius: 2px;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video img{\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: scale(2);\r\n    transition: 0.5s all;\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video img:hover{\r\n    transform: scale(2.2);\r\n}\r\n.content-tutorial .videos-tutoriales .card-tutoriales .video-descripcion{\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n\r\n/*contacto*/\r\n.content-contact{\r\n    background: pinkk;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n.content-contact .contact{\r\n    background: redd;\r\n    width: 95%;\r\n    height: 75vh;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    align-items: center;\r\n}\r\n.content-contact .contact .img{\r\n    background: orange;\r\n    width: 170px;\r\n    height: 170px;\r\n    margin: auto;\r\n    border-radius: 100px;\r\n    box-shadow: 0px 0px 15px black;\r\n}\r\n.content-contact .contact .info{\r\n    background: greenn;\r\n    text-align: center;\r\n    font-family: var(--titlePrincipal);\r\n    font-size: 2.5em;\r\n}\r\n\r\n/*footer*/\r\n.content-contact footer{\r\n    background: var(--subrayado);\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 40px 0px 0px 0px;\r\n}\r\n.content-contact footer .redes-sociales{\r\n    margin: auto;\r\n    background: orangee;\r\n    width: 70%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    text-align: center;\r\n}\r\n.content-contact footer .redes-sociales div{\r\n    display: grid;\r\n    align-items: center;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n.content-contact footer .redes-sociales div a{\r\n    color: black;\r\n} \r\n.curriculum{\r\n    border: 1px solid var(--subrayado);\r\n    border-radius: 5px 5px 5px 15px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    transition: 0.5s all;\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.curriculum:hover{\r\n    background: white;\r\n}\r\n.content-contact footer .redes-sociales div i{\r\n    font-size: 2.5em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*button de popular y tutoriales*/\r\n.content-button{\r\n    background: transparent;\r\n    width: 100%;\r\n    z-index: 200;\r\n    position: absolute;\r\n    top: 80vh;\r\n    transition: linear;\r\n}\r\n.content-button .button{\r\n    text-align: center;\r\n    padding: 10px;\r\n    width: 150px;\r\n    background: transparent;\r\n    box-shadow: 0px 1px 8px var(--subrayado);\r\n    margin: auto;\r\n    border-radius: 50px;    \r\n    cursor: pointer;\r\n}\r\n.topButton{\r\n    animation: topButton 1.2s linear;\r\n    transform: translateY(-70vh);\r\n    /*80 es su top porque en el content button el div pusimos a 80vh del top y al restar -80vh se queda al borde del top*/\r\n}\r\n.content-button .button:hover{\r\n    background: var(--subrayado);\r\n    \r\n}\r\n.content-button .button p{\r\n    font-family: var(--subTitle);\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*tamano para moviles*/\r\n@media only screen and (min-device-width : 0px) and (max-device-width : 320px){\r\n    /*header nav*/\r\n    nav{\r\n        height: 500px;\r\n        width: 80%;\r\n        background: var(--fondoBlanco);\r\n        margin-top: 0;\r\n        transform: rotate(190deg);\r\n        transform-origin: top left;\r\n        transition: 1s all linear;\r\n        position: fixed;\r\n    }\r\n    .showMenu{\r\n        transform: rotate(0deg);\r\n    }\r\n    nav .menu{\r\n        height: auto;\r\n    }\r\n    nav .menu ul{\r\n        width: 100%;\r\n        height: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n    nav .menu ul li.logo{\r\n        grid-row: 1;\r\n        box-shadow: 2px 0px 10px var(--subrayado);\r\n        border-radius: 0;\r\n    }\r\n\r\n    /*icon*/\r\n    .icon-menu{\r\n        display: block;\r\n    }\r\n    .icon-menu i{\r\n        z-index: 144;\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 20px;\r\n        color: black;\r\n        font-size: 2.5em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*home*/\r\n    .content-home{\r\n        min-height: 400px;\r\n        height: 100vh;\r\n        background: pinkk;\r\n        grid-template-columns: 1fr;/*este*/\r\n        grid-template-rows: 1fr 1fr;/*este*/\r\n        align-items: center;\r\n    }\r\n    .content-home .text-home{\r\n        background: redd;\r\n        display: grid;\r\n        align-items: bottom;\r\n    }\r\n    .content-home .text-home .text{\r\n        width: 90%;/*este*/\r\n        margin: 40px auto;/*este*/\r\n        background: orangee;\r\n    }\r\n    .content-home .text-home .text h1{\r\n        font-size: 4.5em;\r\n        text-align: center;\r\n    }\r\n    .content-home .img-home{\r\n        background: greenn;\r\n    }\r\n    .content-home .img-home .img{\r\n        background: yelloww;\r\n        width: 150px;/*este*/\r\n        height: 150px;/*este*/;\r\n        margin: 80px auto;/*este*/\r\n    }\r\n}\r\n/*--------------------------------------------*/\r\n@media only screen and (min-device-width : 321px) and (max-device-width : 474px){\r\n    /*header nav*/\r\n    nav{\r\n        height: 500px;\r\n        width: 80%;\r\n        background: var(--fondoBlanco);\r\n        margin-top: 0;\r\n        transform: rotate(190deg);\r\n        transform-origin: top left;\r\n        transition: 1s all linear;\r\n    }\r\n    .showMenu{\r\n        transform: rotate(0deg);\r\n    }\r\n    nav .menu{\r\n        height: auto;\r\n    }\r\n    nav .menu ul{\r\n        width: 100%;\r\n        height: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n    nav .menu ul li.logo{\r\n        grid-row: 1;\r\n        box-shadow: 2px 0px 10px var(--subrayado);\r\n        border-radius: 0;\r\n    }\r\n\r\n    /*icon*/\r\n    .icon-menu{\r\n        display: block;\r\n    }\r\n    .icon-menu i{\r\n        z-index: 144;\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 20px;\r\n        color: black;\r\n        font-size: 2.5em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*home*/\r\n    .content-home{\r\n        height: 100vh;\r\n        min-height: 400px;\r\n        background: orangee;\r\n        grid-template-columns: 1fr;/*este*/\r\n        grid-template-rows: 1fr 1fr;/*este*/\r\n    }\r\n    .content-home .text-home{\r\n        background: orangee;\r\n    }\r\n    .content-home .text-home .text{\r\n        width: 75%;/*este*/\r\n        margin: 50px auto;/*este*/\r\n        background: redd;\r\n    }\r\n    .content-home .text-home .text h1{\r\n        font-size: 5em;\r\n        text-align: center;\r\n    }\r\n    .content-home .img-home{\r\n        background: greenn;\r\n    }\r\n    .content-home .img-home .img{\r\n        width: 170px;/*este*/\r\n        height: 170px;/*este*/;\r\n        margin: auto;/*este*/\r\n    }\r\n}\r\n/*----------------------------------------*/\r\n@media only screen and (min-device-width : 475px) and (max-device-width : 639px){\r\n    /*header nav*/\r\n    nav{\r\n        height: 500px;\r\n        width: 80%;\r\n        background: var(--fondoBlanco);\r\n        margin-top: 0;\r\n        transform: rotate(190deg);\r\n        transform-origin: top left;\r\n        transition: 1s all linear;\r\n    }\r\n    .showMenu{\r\n        transform: rotate(0deg);\r\n    }\r\n    nav .menu{\r\n        height: auto;\r\n    }\r\n    nav .menu ul{\r\n        width: 100%;\r\n        height: auto;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n    nav .menu ul li.logo{\r\n        grid-row: 1;\r\n        box-shadow: 2px 0px 10px var(--subrayado);\r\n        border-radius: 0;\r\n    }\r\n\r\n    /*icon*/\r\n    .icon-menu{\r\n        display: block;\r\n    }\r\n    .icon-menu i{\r\n        z-index: 144;\r\n        position: absolute;\r\n        left: 20px;\r\n        top: 20px;\r\n        color: black;\r\n        font-size: 2.5em;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*home*/\r\n    .content-home{\r\n        height: 100vh;\r\n        min-height: 400px;\r\n        background: greenn;\r\n        grid-template-columns: 1fr;/*este*/\r\n        grid-template-rows: 1fr 1fr;/*este*/\r\n    }\r\n    .content-home .text-home{\r\n        background: orangee;\r\n    }\r\n    .content-home .text-home .text{\r\n        width: 50%;/*este*/\r\n        margin: 50px auto;/*este*/\r\n        background: redd;\r\n    }\r\n    .content-home .text-home .text h1{\r\n        font-size: 5em;\r\n        text-align: center;\r\n    }\r\n    .content-home .img-home{\r\n        background: greenn;\r\n    }\r\n    .content-home .img-home .img{\r\n        width: 200px;/*este*/\r\n        height: 200px;/*este*/;\r\n        margin: auto;/*este*/\r\n    }\r\n   \r\n\r\n}\r\n@media only screen and (min-device-width : 475px){\r\n    .content-tutorial .videos-tutoriales{\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-gap: 5px;\r\n    }\r\n    /*contact*/\r\n    .content-contact .contact{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    .content-contact footer .redes-sociales{\r\n        width: 90%;\r\n        height: 60px;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n@media only screen and (min-device-width : 950px){\r\n    .content-home .text-home .text{\r\n        width: 30%;\r\n        margin: 120px 15%;\r\n        background: redd;\r\n    }\r\n    .content-popular .foods .content-subtext{\r\n        width: 95%;\r\n        background: orangee;\r\n        margin: auto;\r\n        display: grid;\r\n        grid-template-columns: 300px 1fr;\r\n    }\r\n    .content-popular .foods .content-subtext .title{\r\n        grid-column: 1/3;\r\n    }\r\n\r\n    .content-tutorial .videos-tutoriales{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-gap: 20px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*animaciones*/\r\n/*menu*/\r\n@keyframes menuHover {\r\n    0%{\r\n        background: var(--subrayado);\r\n        font-size: 0.5em;\r\n    }\r\n    50%{\r\n        font-size: 1.7em;\r\n    }\r\n    100%{\r\n        background: white;\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n@keyframes imgGiro {\r\n    0%{\r\n        transform: rotate(0);\r\n    }\r\n    50%{\r\n        box-shadow: 5px 5px 15px black;\r\n    }\r\n    100%{\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes aniMenu {\r\n    0%{\r\n        transform: rotate(190deg);\r\n    }\r\n    100%{\r\n        transform: rotate(0deg);\r\n    }\r\n}\r\n@keyframes ejopy{\r\n    0%{\r\n        transform: translateY(0vh);\r\n    }\r\n    100%{\r\n        transform: translateY(-100vh);\r\n    }\r\n}\r\n@keyframes topButton{\r\n    0%{\r\n        transform: translateY(0vh);\r\n    }\r\n    20%{\r\n        transform: translateY(-70vh);\r\n    }\r\n    40%{\r\n        transform: translateY(-55vh);\r\n    }\r\n    60%{\r\n        transform: translateY(-70vh);\r\n    }\r\n    80%{\r\n        transform: translateY(-65vh);\r\n    }\r\n    100%{\r\n        transform: translateY(-70vh);\r\n\r\n    }\r\n}\r\n@keyframes tutorial{\r\n    0%{\r\n        transform: translateX(-150%);\r\n    }\r\n    50%{\r\n        transform: translateX(20%);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@keyframes a{\r\n    0%{\r\n        transform: translateX(-150%);\r\n        background: var(--subrayado);\r\n    }\r\n    100%{\r\n        transform: translateX(0);\r\n        background: var(--subrayado);\r\n    }\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--12-1!../../../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./src/assets/css/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Damian\Desktop\food\src\assets\css\styles.css */"./src/assets/css/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map