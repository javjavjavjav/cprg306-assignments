import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div className="min-h-screen max-w-5xl w-full items-conter jutify-between p-24">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="http://localhost:3000/week-2">Week-2</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/week-3">Week-3</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/week-4">Week-4</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/week-5">Week-5</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/week-6">Week-6</Link>
        </li>
        </ul>
    </div>
  );
};

export default StudentInfo;
