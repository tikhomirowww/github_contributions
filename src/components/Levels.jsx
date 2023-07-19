import Tooltip from "./Tooltip";

const Levels = () => {
	function getTitle(level) {
		switch (level) {
			case 1:
				return "No contributions";
			case 2:
				return "1-9 contributions";
			case 3:
				return "10-19 contributions";
			case 4:
				return "20-29 contributions";
			case 5:
				return "30+ contributions";
		}
	}
	return (
		<div className="levels">
			<p className="text">Меньше</p>
			<div className="days">
				{[...new Array(5)].map((_, i) => (
					<Tooltip key={i} title={getTitle(i + 1)} trigger="hover">
						<div className={`day level-${i + 1}`}></div>
					</Tooltip>
				))}
			</div>
			<p className="text">Больше</p>
		</div>
	);
};

export default Levels;
