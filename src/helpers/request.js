class Request {

    constructor(){
      //this.baseUrl = "http://localhost:8080/api"
      this.baseUrl = "https://sharkey-gigster-gigservice.herokuapp.com/api";
    }
  
      get(url) {
        return fetch(`${this.baseUrl}${url}`)
        .then((res) => res.json());
      }

      post(url, payload){
        console.log("Final payload being sent via POST:")
        console.log(payload);
        return fetch(`${this.baseUrl}${url}`, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
      }
  
      delete(url) {
        console.log(url)
        return fetch(`${this.baseUrl}${url}`, {
          method: "DELETE",
          headers: {'Content-Type': 'application/json'}
        })
      }

      put(url, payload){
        console.log("Final payload being sent via POST:")
        console.log(payload);
        return fetch(`${this.baseUrl}${url}`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
      }
  
  }
  
  export default Request;