import React, { useState, useEffect } from "react";

export default function Overview() {
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    const res = await fetch("/users");
    res
      .json()
      .then((res) => setUserData(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  });

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <div>Loading . . .</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        userData.map((data: any) => (
          <div>
            <h4>ID : {data.id}</h4>
            <h4>Userame : {data.username}</h4>
          </div>
        ))
      )}
    </>
  );
}
