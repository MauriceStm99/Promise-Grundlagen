
let promError = false;


  function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(promError){
                reject("Hat nicht geklappt");
            }
            else{
                resolve("Hat geklappt");
            }
        }, 300);
      });
  }

function usePromise() {
    let prom = getPromise();
    console.log(prom);
}