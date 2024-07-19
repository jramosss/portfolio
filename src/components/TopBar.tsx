export default function TopBar() {
  return (
    <div className="flex justify-between items-center p-4 text-white">
      <div>
        <h1 className="text-2xl font-semibold">Julián Ramos</h1>
      </div>
      <div>
        <button
          type="button"
          className="text-white font-semibold py-2 px-4 rounded"
        >
          About me
        </button>
        <button
          type="button"
          className="text-white font-semibold py-2 px-4 rounded"
        >
          Work Experience
        </button>
        <button
          type="button"
          className="text-white font-semibold py-2 px-4 rounded"
        >
          Projects
        </button>
        <button
          type="button"
          className="text-white font-semibold py-2 px-4 rounded"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
