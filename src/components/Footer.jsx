
export default function Footer(props) {

  const {handleToggleModal, data} = props;

  return (
    <footer>
      <div className="background-gradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>{data?.copyright}</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
