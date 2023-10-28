


class ServiceApi {
    _urlBase = 'https://api.apilayer.com/fixer/convert?';
    _apiKey = 'qaLPGozSxy1D0ZvBK7ovmJ7lm0dCRVIR';




    getResource = async (url) => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "qaLPGozSxy1D0ZvBK7ovmJ7lm0dCRVIR");
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        let res = await fetch(url,requestOptions);

        if (!res.ok) {
            throw new Error(`Проблем ${url}, статус ${res.status}`)
        }
        let response = await res.json();
        // console.log(response);
        return response;
    }

    getCurrency = async (from) => {
        const res = await this.getResource(`${this._urlBase}to=rub&from=${from}&amount=1`)
        console.log(res.result);
        console.log('good');
        return res.result;
    }


    //https://weatherstack.com/quickstart
    

    
}

export default ServiceApi;