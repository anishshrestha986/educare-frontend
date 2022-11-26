type progressBarProps = {
  completed: number;
};
const ProgressBar = (props: progressBarProps) => {
  const { completed } = props;
  const containerStyles = {
    height: "5px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 50,
    margin: "5px 0px 5px 0px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#00D7A3",
    borderRadius: "inherit",
    textAlign: "right" as "right",
  };

  const labelStyles = {
    color: "grey",
    fontSize: "0.7rem",
    fontWeight: "bold",
  };

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </>
  );
};

export default ProgressBar;
