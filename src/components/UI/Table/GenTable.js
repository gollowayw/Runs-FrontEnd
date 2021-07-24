function GenTable(props) {
  const tableSizeClass =
    "grid-cols-" + props.children[0].props.children.length + " ";

  return (
    <div
      className={
        " grid bg-transparent gap-y-4 text-myTableText " +
        tableSizeClass +
        (props.className == null ? "" : props.className)
      }
    >
      {props.children}
    </div>
  );
}
export default GenTable;
