import classes from "./UserList.module.css";
import UserListItem from "./UserListItem";

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((meetUp) => (
        <UserListItem
          key={meetUp.UserName}
          UserName={meetUp.UserName}
          Alias={meetUp.Alias}
          img={meetUp.image}
        />
      ))}
    </ul>
  );
}

export default UserList;
