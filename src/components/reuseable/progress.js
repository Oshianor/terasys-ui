class ProgressBarExample extends React.Component {
  render() {
		const { percent } = this.props;
    return <ProgressBar percentage={percent} />;
  }  
}

export default ProgressBarExample;

const ProgressBar = (props) => {
	const bar = {
		position: "relative",
		height: 10,
		borderRadius: 3,
		boxShadow: "0px 0px 1px 0px",
		color: '#9c9999',
		backgroundColor: '#e6e6e6'
	}
  return (
		<div style={bar} >
			<Filler percentage={props.percentage} />
		</div>
	)
}

const colors = {
	black: "#000000",
	blue: "#0000ff",
	brown: "#a52a2a",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgrey: "#a9a9a9",
	darkgreen: "#006400",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkviolet: "#9400d3",
	fuchsia: "#ff00ff",
	gold: "#ffd700",
	green: "#008000",
	indigo: "#4b0082",
	khaki: "#f0e68c",
	lightblue: "#add8e6",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lime: "#00ff00",
	magenta: "#ff00ff",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	orange: "#ffa500",
	pink: "#ffc0cb",
	purple: "#800080",
	violet: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	yellow: "#ffff00"
}



function colorRan() {
	var result;
	var count = 0;
	for (var prop in colors)
		if (Math.random() < 1 / ++count)
			result = prop;
	return result;
}

const Filler = (props) => {
	const err = {
		background: colorRan(),
		// background: props.percentage === 100 ? "rgb(25, 162, 23)" : "#1F7BD8",
		height: "100%",
		borderRadius: "inherit",
		transition: "width .2s ease-in",
		textAlign: 'center',
		fontSize: 'smaller',
		padding: '2px 0px',
    fontWeight: 800,
		// color: props.percentage > 5 ? 'whitesmoke' : '#1F7BD8',
		width: `${props.percentage}%`
	}
	// return <div style={err} > {props.percentage}% </div>
  return <div style={err} ></div>	
}