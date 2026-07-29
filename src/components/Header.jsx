import LOGO from "../assets/LOGO.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_ICON } from "../../constants";
import { toggleTheGptSearchFEAT } from "../utils/gptToggleSlice";

const Header = ({ isBrowse = false }) => {
  const dispatcher = useDispatch();
  const navigator = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }

  const handleToggleGptSearch = () => {
    dispatcher(toggleTheGptSearchFEAT());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatcher(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          }),
        );
        navigator("/browse");
      } else {
        dispatcher(removeUser());
        navigator("/");
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    // Header.jsx
    <header className="fixed top-0 left-0 right-0 p-4 md:px-12 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
      <img src={LOGO} alt="Logo" className="w-28 md:w-40 h-auto" />

      {isBrowse && (
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={handleToggleGptSearch}
            className="px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-base bg-purple-600 text-white rounded-lg"
          >
            AI Search
          </button>
          <button
            onClick={handleSignOut}
            className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base bg-red-600 text-white rounded-lg"
          >
            Sign Out
          </button>
          <img
            src={USER_ICON}
            alt="User"
            className="w-8 h-8 md:w-10  rounded-full"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
{
  /* <header className="fixed  top-6 left-8 right-4 pr-0 flex justify-between  items-center z-10">
      <img src={LOGO} alt="Logo" className="w-40 h-auto" />

      {isBrowse && (
        <div className="flex items-center gap-4">
          <button
            className="px-5 py-3 bg-gray-500 rounded-2xl cursor-pointer"
            onClick={handleToggleGptSearch}
          >
            {" "}
            AI Search
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
          <img
            src={USER_ICON}
            alt="User"
            className="w-10 h-10 mr-2 rounded-full"
          />
        </div>
      )}
    </header> */
}
