/*
Descrizione:
Partendo dal markup base fornito, fare uno slider usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 2 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const {createApp} = Vue 

createApp({
    data(){
        return{
            activeIndex: 0,
            autoscroll: null,
            slides: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, 
                    {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, 
                    {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, 
                    {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, 
                    {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ]
        }
    },
    methods:{
        //Creo la funzione che farà scorrere le slide indietro
        prevClick(){
            //activeIndex sarà -- perchè decremento
            this.activeIndex--;
            //SE l'activeIndex sarà minore a zero
            if(this.activeIndex < 0){
                // l'activeIndex sarà uguale alla lunghezza
                //di tutto l'array -1(perchè parto da 0), tornando
                //di conseguenza indietro
                this.activeIndex = this.slides.length -1;
            }
        },
        //Ora creo la funzione per scorrere in avanti
        nextClick(){
            //quindi incremento il contatore
            this.activeIndex++;
            //e SE l'activeIndex sarà maggiore della lunghezza dell'array -1
            if(this.activeIndex > this.slides.length -1){
                //allora torna a 0, quindi inizia di nuovo il giro
                this.activeIndex = 0;
            }
        },
        //creo l'autoplay
        autoPlay(){
            //ho creato una variabile in data che mi permetterà di pulire
            //alla fine del giro di setInterval
            this.autoscroll = setInterval(()=>{
                //e gli passo la funzione che incrementa le immagini
                this.nextClick();
            }, 3000) //e do 3s di attesa tra una e l'altra
        },
        //ora creo lo stop
        stopPlay(){
            //uso il clearInterval per bloccare l'autoscroll
            clearInterval(this.autoscroll);
            //e ridefinisco a null  cos' svuota tutto
            this.autoscroll = null;
        }
    },
    //monto l'autoplay, così partirà subito
    mounted(){
        this.autoPlay();
    }
}).mount('#app')