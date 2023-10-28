



class RndNumber {
    
    getResourse = async(url) => {
      let res = await fetch(url)
      if (!res.ok){
        return 'no'
      }
      let response = await res.json()
      console.log('response');
      return response
    }
}


export default RndNumber;