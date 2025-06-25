
let promError = false;


  function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1");
            
            if(promError){
                reject("Hat nicht geklappt");
            }
            else{
                resolve("Hat geklappt");
            }
        }, 1000);
      });
  }
  function getPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            if(!promError){
                reject("Hat nicht geklappt");
            }
            else{
                resolve("Hat geklappt");
            }
        }, 100);
      });
  }

  function getPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3");
            if(promError){
                reject("Hat nicht geklappt");
            }
            else{
                resolve("Hat geklappt");
            }
        }, 1000);
      });
  }

async function usePromise() {
    let prom = "nothing happened";
    try {
    await getPromise();
    await getPromise2();
    await getPromise3();
    console.log("juhu");
}
    catch (error) {
        console.log(error);
    }
    console.log("ende");
}
    