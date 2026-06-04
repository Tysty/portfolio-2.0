import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <Link to={"/"}>
        <button type="button" className="btn btn-primary">
          Go back Home
        </button>
      </Link>
    </div>
  );
}
export default PageNotFound;
