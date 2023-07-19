import classNames from "classnames";

const Day = ({ day, selectedDay, setSelectedDay }) => {
	function isSelected() {
		if (!selectedDay) return false;
		const format = "DD-MM-YYYY";
		const selected = selectedDay.format(format);
		const current = day.format(format);

		return selected === current;
	}

	function handleClick() {
		setSelectedDay(day);
	}

	return (
		<div
			onClick={handleClick}
			className={classNames("day level-3", { selected: isSelected() })}
		></div>
	);
};

export default Day;
