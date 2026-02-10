import Homepage from "./Homepage";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
        <Link to="/addBook">
    <button className="add-new-book">
        Add New Book + 
    </button>
        </Link>
      <Homepage/>
    </div>
  )
}

export default Admin
