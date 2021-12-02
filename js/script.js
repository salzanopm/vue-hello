// CONSEGNA
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


// SVILUPPO
// faccio attivare l'estensione di vuejs
Vue.config.devtools = true; 

const app = new Vue(
    {
        el: '#root',
        data: {
            titlemessage:'Hello World vengo da Vuejs'
            
        }
    }
)