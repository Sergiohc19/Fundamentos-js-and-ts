// Fetch API with Promises, Async and Await
const url = "https://jsonplaceholder.typicode.com/comments22";

//* Con .then
fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(data => console.log(data))
    .catch(error =>
        error === 404 ? console.error(`Error ${error}: Recurso no encontrado`) :
            error === 500 ? console.error(`Error ${error}: Error en la conexión a internet`) :
                console.log(`Error ${error}: Error en la respuesta`)
    );

//* Con Async & Await

//? Con ternarios 
const consultAPI = async () => {
    try {
        const res = await fetch(url);
        const data = res.ok ? await res.json() : Promise.reject(`Error: ${res.status}`);
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
};

consultAPI();

//? Sin ternarios y es el código más clean code, es la más recomendable
const consultAPI2 = async () => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error ${res.status}: Hubo un error`);
        }

        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
};

consultAPI2();

