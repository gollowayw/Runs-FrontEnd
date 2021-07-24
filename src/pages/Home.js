import Todo from "../components/Todo";

function HomePage() {
  return (
    <div>
      <h1 className="flex text-white items-vertical justify-left">My Todos</h1>
      <div className="flex items-vertical justify-center min-h-screen col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table  text-gray-400 border-separate gap-y-6 text-sm">
            <thead className="text-gray-500">
              <tr>
                <th class="p-3">To Do Title</th>
                <th class="p-3 text-left">To Do Description</th>
                <th class="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <Todo text="Learn React" />
              <Todo text="Master React" />
              <Todo text="Finish life" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
