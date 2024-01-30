import React from "react";
import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
};
