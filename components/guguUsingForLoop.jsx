export default function GuguUsingForLoop() {
  for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    if (i === 4) {
      console.log("4단은 출력안해요.");
      continue;
    }
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }

  return <div>for loop</div>;
}
