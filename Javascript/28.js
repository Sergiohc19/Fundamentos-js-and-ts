// Performance y Multiple Asyn / Await
const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos"
const url3 = "https://jsonplaceholder.typicode.com/photos"

const consultAPI = async () => {
    try {
        const inicio = performance.now()

        const res = await fetch(url);
        // if (!res.ok) {
        //     throw new Error(`Error ${res.status}: Hubo un error`);
        // }
        const data = await res.json();
        console.log(data);


        const res2 = await fetch(url2);

        const data2 = await res2.json();
        console.log(data2);


        const res3 = await fetch(url3);

        const data3 = await res3.json();
        console.log(data3);




        const fin = performance.now()

        console.log(`El resultado es: ${fin - inicio} ms`)

    } catch (error) {
        console.error(error.message);
    }
};

consultAPI();


const consultAPI2 = async () => {


    try {
        const inicio = performance.now()
        const [] = await Promise.all([fetch(url),fetch(url2),fetch(url3)])
        const res = await fetch(url);
        
    
        const data = await res.json();
        console.log(data);


        const res2 = await fetch(url2);

        const data2 = await res2.json();
        console.log(data2);


        const res3 = await fetch(url3);

        const data3 = await res3.json();
        console.log(data3);

        const fin = performance.now()

        console.log(`El resultado es: ${fin - inicio} ms`)

    } catch (error) {
        console.error(error.message);
    }
};

consultAPI2()