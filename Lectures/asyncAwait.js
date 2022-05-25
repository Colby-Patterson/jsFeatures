const fakeAPICall = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(url === 'goodurl'){
            resolve({data:['joe','john']})
        } else {
            reject({error:'404 page not found'})
        }
    }, 20000);
  });
};

// async await function
const getData = async () => {
  // fakeAPICall returns a promise i use the await key word
  console.log('before api call')
  let response = await fakeAPICall('url')
  console.log('after api call')
  console.log('response:', response)
}

console.log('before getData call') // 1
getData()
console.log('after getData call')