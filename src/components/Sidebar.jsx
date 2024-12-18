export default function Sidebar(props) {
  const { handleSidebarClose, data } = props;

  return (
    <div className="sidebar">
      <div className="background-overlay" onClick={handleSidebarClose}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="description-container">
          <p className="description">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleSidebarClose}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
