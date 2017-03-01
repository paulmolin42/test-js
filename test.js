function fibonacci(n) {
  console.log('Coucou o')
  let previous = 0;
  let current = 2;

  for(let i = 0; i < n; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
  }

  return current;
}
