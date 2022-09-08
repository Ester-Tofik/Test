

//if the function return same value
async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
}

// 
async function myFunc() {
    let x = await getNumberFromServer();
    return 2 * x;
}

//if the function return random value


//1. do more function  getNumbers()  that it's not a asynchronous function, 
//Then both functions can be called at the same time and the performance will improve
//we used Promise.all for promise that we have all the results.  
async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
}

function getNumbers() {
    let sum;
    const x1 = getNumberFromServer();
    const x2 = getNumberFromServer();
    Promise.all([x1, x2])
        .then((value) => {
            sum += value;
        })
    return sum;
}


async function myFunc2() {
    const res = await getNumbers();
    return res;
}


//2. do more function  getNumbersFromServer() in the server that returns 2 numbers and call her only once 

async function getNumbersFromServer(): Promise<number[]> {
    //some api call to return 2 numbers from a remote server
}

async function myFunc3() {
    let arr = await getNumbersFromServer();
    return arr[0] + arr[1];
}




