import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import SummaryApi from "./common";
import Context from "./Context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

// Remove dispatch as a parameter and use useDispatch inside the function
export const fetchUsersDetails = async () => {
  const dataResponse = await fetch(SummaryApi.currect_user.url, {
    method: SummaryApi.currect_user.method,
    credentials: "include",
  });

  const dataApi = await dataResponse.json();

  // useDispatch must be used within a functional component (or hook)
  if (dataApi.success) {
    return dataApi.data;
  }
  return null;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserDetails = async () => {
      const userDetails = await fetchUsersDetails();
      if (userDetails) {
        dispatch(setUserDetails(userDetails)); // Dispatch to Redux store
      }
    };

    loadUserDetails(); // Call the async function inside useEffect
  }, [dispatch]);

  return (
    <Context.Provider
      value={{
        fetchUsersDetails, // user detail fetch
      }}
    >
      <div className="relative flex items-start justify-between w-[100%] h-[100%]">
        <Navbar />
        <main className="ml-[13%] max-w-[87%] h-[100%]">
          <Outlet /> {/* Will handle all children routes, including Login */}
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
