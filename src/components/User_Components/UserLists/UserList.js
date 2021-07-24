import GenTable from "../../UI/Table/GenTable";
import GenTableHeaderItem from "../../UI/Table/GenTableHeaderItem";
import GenTableHeader from "../../UI/Table/GenTableHeader";
import GenTableRow from "../../UI/Table/GenTableRow";
import GenRowItemImg from "../../UI/Table/GenRowItemImg";
import GenRowItem from "../../UI/Table/GenRowItem";
function UserList(props) {
  return (
    <GenTable>
      <GenTableHeader>
        <GenTableHeaderItem>Photo</GenTableHeaderItem>
        <GenTableHeaderItem>User Name</GenTableHeaderItem>
        <GenTableHeaderItem>Alias</GenTableHeaderItem>
        <GenTableHeaderItem>Bio</GenTableHeaderItem>
        <GenTableHeaderItem>Favorite Game</GenTableHeaderItem>
      </GenTableHeader>
      {props.users.map((user) => (
        <GenTableRow>
          <GenRowItemImg src={user.strImageUrl}></GenRowItemImg>
          <GenRowItem>{user.strUserName}</GenRowItem>
          <GenRowItem>{user.strAlias}</GenRowItem>
          <GenRowItem>{user.strBio}</GenRowItem>
          <GenRowItem>OOT</GenRowItem>
        </GenTableRow>
      ))}
    </GenTable>
  );
}

export default UserList;
