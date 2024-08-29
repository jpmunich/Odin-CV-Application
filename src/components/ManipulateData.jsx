function LoadData({ onLoad, onClear }) {
  return (
    <div className="manipulate-data-container">
      <div className="manipulate-data-buttons-container">
        <button onClick={onClear}>Clear Data</button>
        <button onClick={onLoad}>Load Data</button>
      </div>
    </div>
  );
}

export default LoadData;
