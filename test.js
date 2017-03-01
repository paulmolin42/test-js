function fibonacci(n) {
  console.log('Coucou';
  let previous = 0;
  let current = 1;

  for(let i = 0; i < n; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
  }

  return current;
}
