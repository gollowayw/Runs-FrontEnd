import Todo from "../components/Todo";

function HomePage() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Finish life" />
    </div> 

  );
}

export default HomePage;
