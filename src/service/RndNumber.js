



class RndNumber {
  min = -50;
  max= 50;
  count = 1;
  url = `http://www.randomnumberapi.com/api/v1.0/random?min=-50&max=50&count=1`
    
    getResourse = async(url) => {
      let res = await fetch(url)
      if (!res.ok){
        throw new Error (`Could not fetch ${url} , status: ${res.status}`);
      }
      // let response = await res.json()
      // console.log('response');
      // console.log(response);
   
      return await res.json()
    }
    
    getRndNumber = async () => {
      const response = await this.getResourse(`https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new`);
   
      return response
    }
}


export default RndNumber;