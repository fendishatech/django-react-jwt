import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const authenticated = false;

  if (authenticated) {
    return (
      <>
        <h1 className="text-red-400 text-center">For Private Eyes only!</h1>
        <Routes>
          <Route {...rest}>{children}</Route>
        </Routes>
      </>
    );
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
