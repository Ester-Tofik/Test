// * Because there is no await for the getNumberFromServer() function, 
//a situation can arise that the second for will run on an incomplete array and return an error,
// It doesn't help that there is an  await for 'p' because it only contains a type of Promise, 
//but it is not really Promise, so you don't have to wait for it to return.
// (and there is no need for the array to be of this type)


// *  
async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
}

//we need to await to getNumberFromServer()  to avoid lack of synchronization.
async function run1000(): Promise<void> {
    const promises: number[] = [];
    for (let i = 0; i < 1000; i++) {
        const res = await getNumberFromServer();
        promises.push(res);
    }


    //promises it's only array of types number and not Promise, so  it's not a promises and we're not need to await...
    for (const p of promises) {
        ///do something with p
        p
    }
}
