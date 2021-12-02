// CONSEGNA
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// SVILUPPO
// faccio attivare l'estensione di vuejs
Vue.config.devtools = true; 

const app = new Vue(
    {
        el: '#root',
        data: {
            titleMessage:'Hello World vengo da Vuejs',
            imgVue:'img/evan-you.jpg'
        }
    }
)