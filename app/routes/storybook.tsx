export default function StoryBook() {
  return (
    <div className="flex flex-col bg-red p-12 gap-4">
      <h1 className="text-2xl">Table</h1>
      <li>
        <a href="/gas-volume">Gas Volume Table</a>
      </li>
      <li>
        <a href="/demand">Demand Table</a>
      </li>
      <li>
        <a href="/supply">Supply Table</a>
      </li>
    </div>
  );
}
