export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>{" "}
      </p>
    );
  const countitems = items.length;
  const packeditems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packeditems / countitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything !Ready to go ✈️"
          : `💼 You have ${countitems} items on your list,and You already packed
        ${packeditems}(${percentage}%)`}
      </em>
    </footer>
  );
}
