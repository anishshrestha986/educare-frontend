type progressBarProps = {
  completed: number;
};
const ProgressBar = (props: progressBarProps) => {
  const { completed } = props;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#00000",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#00D7A3",
    borderRadius: "inherit",
    textAlign: "right" as "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
