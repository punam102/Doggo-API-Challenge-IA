import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const ReAuth = ({children}) => {
    const auth = useSelector((state) => state.authreducer.data.isAuth);
  const location = useLocation();
  console.log(auth,"authentication")
  var item=localStorage.getItem("login")
  if(item)
  {
    return children
  }
 else  if (!auth ) {
    return <Navigate to="/login" state={{ from: location }} replace/>;
  }
  return children;
};

export default ReAuth;
