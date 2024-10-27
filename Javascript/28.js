// Performance y Multiple Asyn / Await
const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos"
const url3 = "https://jsonplaceholder.typicode.com/photos"

const consultAPI = async () => {
    try {
        const inicio = performance.now()

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
        console.log(`El resultado de la PRIMERA function es: ${fin - inicio} ms`)

    } catch (error) {
        console.error(error.message);
    }
};

consultAPI();


const consultAPI2 = async () => {


    try {
        const inicio = performance.now()
       
        // Método 2: Medición usando console.time()
        console.time("Tiempo de ejecución (console.time)");

        // Método 3: Medición usando performance.mark()
        performance.mark("inicio");


        const [res, res2, res3] = await Promise.all([fetch(url),fetch(url2),fetch(url3)])
        const [data, data2, data3] = await Promise.all([res.json(),res2.json(),res3.json()])


        console.log(data);
        console.log(data2);
        console.log(data3);

        const fin = performance.now()
        console.log(`El resultado de la SEGUNDA function es: ${fin - inicio} ms`)
        
        // Fin del tiempo para console.time()
        console.timeEnd("Tiempo de ejecución (console.time)");

        // Fin del tiempo para performance.mark() / performance.measure()
        performance.mark("fin");
        performance.measure("Tiempo de ejecución (performance.measure)", "inicio", "fin");

        const medidas = performance.getEntriesByName("Tiempo de ejecución (performance.measure)");
        console.log(`Tiempo de ejecución (performance.measure): ${medidas[0].duration} ms`);

        // Limpiar marcas y medidas
        performance.clearMarks();
        performance.clearMeasures();


    } catch (error) {
        console.error(error.message);
    }
};

consultAPI2()