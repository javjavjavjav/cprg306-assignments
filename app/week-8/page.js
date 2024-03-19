"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }

  function handleSignOut() {
    firebaseSignOut();
  }

  return (
    <div className="bg-blue-600 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-white mb-4 text-3xl font-bold">
        Shopping List Application
      </h1>
      {user ? (
        <div className="text-center ">
          <p className="text-white text-xl mb-4">
            Welcome, {user.displayName}{" "}
          </p>
          <Link
            href="/week-8/shopping-list"
            className="text-white text-xl mb-4"
          >
            Shopping List
          </Link>
          <br />
          <button onClick={handleSignOut} className="text-white text-xl m-4">
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}
