import { useState, useEffect } from "react";
import UserList from "../components/User_Components/UserLists/UserList";

function AllUsersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(process.env.REACT_APP_API_URL + "/RetrieveAllUsers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedUsers(data["body"]);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex items-vertical justify-center min-h-screen col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <section>
            <p>I am trying my best here......</p>
          </section>
        </div>
      </div>
    );
  return (
    <div className="mt-20">
      <div className="flex items-vertical justify-center min-h-screen col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <UserList users={loadedUsers} />
        </div>
      </div>
    </div>
  );
}

export default AllUsersPage;
