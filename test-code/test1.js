Promise.resolve(
  new Promise((resolve, reject) => {
    console.log('inner Promise');
    resolve('123')
  }).then(data => {
    console.log(1, typeof(data), data);
    return data + '4'
  })
).then(data => {
  return Promise.resolve('Randy' + data) 
}).then(data => {
  console.log(2, typeof(data), data);
})