import './scss/index.scss';

const id: Node = document.getElementById('app');
console.log('Hello, world!');


function sleep(time: number = 1000): Promise<number> {
  return new Promise<number>((resolve: (value: number) => void) => {
    setTimeout(() => {
      resolve(1000);
    }, time)
  })
}

async function start() {
  console.log('first')
  await sleep(4000)
  console.log('second')
}

start()

