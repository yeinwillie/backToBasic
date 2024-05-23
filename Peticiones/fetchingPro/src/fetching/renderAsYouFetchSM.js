export function renderAsYouFetchSM (url) {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fc8d9df1camshc9ecc9604c7cef3p1d6cefjsn6fcfeb773d61',
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };

    const promise = 
     fetch(url, options)
    .then(response => response.json())
    .then(data => data);

    return getSuspenderOwSM(promise);
};


function getSuspenderOwSM(promise) {
    let status = 'pending';
    let response;

    const suspender = promise.then(
        (res)=>{
            status = 'success';
            response = res;
            console.log("Success:", res);
        },
        (res) =>{
            status = 'error';
            response = err;
            console.log("Error:", err);
        }
    );

    const read = () => {
        switch(status){
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            default: 
            return response;
    
        }
    }

    return { read }; 

}


