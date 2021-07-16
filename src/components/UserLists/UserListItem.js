import classes from "./UserListItem.module.css";
import Card from "../UI/Card";

function UserListItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.img} alt={props.UserName} />
        </div>
        <div className={classes.content}>
          <h3>{props.UserName}</h3>
          <p>{props.Alias}</p>
        </div>
      </li>
    </Card>
  );
}

export default UserListItem;
