import React, { useEffect, useState } from "react";

const getNumberOfUsersFromStorage = () => {
  try {
    const viewersCounter = JSON.parse(localStorage.getItem("viewersCounter"));
    // Check if not older than 2 hours
    if (viewersCounter?.savedOn > Date.now() - 7200000) {
      return viewersCounter?.numberOfUsers;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Failed to get viewers counter from storage", error);
    return null;
  }
};

const fetchNumberOfUsers = async () => {
  try {
    const response = await fetch("/.netlify/functions/updateViewersCounter");

    if (response.ok) {
      const { numberOfUsers } = await response.json();
      if (numberOfUsers) {
        localStorage.setItem("viewersCounter", JSON.stringify({ numberOfUsers, savedOn: Date.now() }));
        return numberOfUsers;
      }
    }

    return null;
  } catch (error) {
    throw new Error(`Failed to fetch viewers counter: ${error}`);
  }
};

const ViewersCounter = () => {
  const [viewersCount, setViewersCount] = useState("");

  useEffect(() => {
    const updateViewersCount = async () => {
      try {
        let numberOfUsers = getNumberOfUsersFromStorage();

        if (!numberOfUsers) {
          numberOfUsers = await fetchNumberOfUsers();
        }

        setViewersCount(numberOfUsers);
      } catch (error) {
        console.log("Failed to update viewers counter", error);
      }
    };

    updateViewersCount();
  }, []);

  if (!viewersCount) {
    return null;
  }

  return (
    <div className="mt-12  md:mt-0 text-white">
      Website Visitors
      <div className="mt-3 text-2xl md:text-center font-inter">{String(viewersCount).padStart(6, "0")}</div>
    </div>
  );
};

export default ViewersCounter;
