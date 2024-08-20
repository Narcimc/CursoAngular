interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;


}
interface Details{
    autor:string;
    year:number;
}

const AudioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 3.5,
    song: "Imagine",
    details: {
        autor: "John Lennon",
        year: 1971
    }

};
//ponerle otro valor 
const{song: anotherSong} = AudioPlayer;
//desestructuracion extraer las piezas que queremos del objeto
const {
    audioVolume, 
    songDuration, 
    song, 
    details
} = AudioPlayer;
//desestructurar a details
const {
    autor, 
    year
} = details;


console.log('song:',anotherSong);
console.log('audioVolume:',audioVolume);
console.log('songDuration:',songDuration);
console.log('song:',song);
console.log('details:',details);
console.log('autor:',autor);
console.log('year:',year);


//Desestructuracion de arreglos 
const [, ,trunk = 'Not fOunt']:string[]=['guku','Vegeta','trunk'];


console.error('personaje3:',trunk);


export{}