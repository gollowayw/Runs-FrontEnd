import UserList from "../components/UserLists/UserList";

const DUMMY_DATA = [
  {
    UserName: "Bob",
    Alias: "BabyBackBusiness",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555438427/shape/mentalfloss/picture_0.png",
  },

  {
    UserName: "Raf",
    Alias: "rmz",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555438427/shape/mentalfloss/picture_0.png",
  },
  {
    UserName: "Brian",
    Alias: "LittleChimp",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555438427/shape/mentalfloss/picture_0.png",
  },
  {
    UserName: "Neil",
    Alias: "Momento",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555438427/shape/mentalfloss/picture_0.png",
  },
];

function AllUsersPage() {
  return (
    <section>
      <header>All Users Page!!!!</header>
      <UserList users={DUMMY_DATA} />
    </section>
  );
}

export default AllUsersPage;
