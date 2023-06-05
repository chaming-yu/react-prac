export default function GuguUsingMap(props) {
  const { 사용이름은내마음대로, 사용2 } = props;

  const num1 = [2, 3, 4, 5, 6, 7, 8, 9];
  const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const number = num1.map((i) => {
    return (
      <div>
        {i + "단"}
        {num2.map((j) => {
          return <div>{i + "X" + j + "=" + i * j}</div>;
        })}
      </div>
    );
  });

  return (
    <div>
      <div>{사용이름은내마음대로}</div>
      <div>{사용2}</div>
      <div>{number}</div>
    </div>
  );
}
