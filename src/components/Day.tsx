import classNames from "classnames";
import Tooltip from "./Tooltip";
import { Dayjs } from "dayjs";
import { TContributions } from "./ContributionGraph";

interface IDayProps {
	day: Dayjs;
	selectedDay: Dayjs | null;
	setSelectedDay: (day: Dayjs | null) => void;
	contributions: TContributions;
}

const Day = ({
	day,
	selectedDay,
	setSelectedDay,
	contributions,
}: IDayProps) => {
	const formattedDay = day.format("YYYY-MM-DD");

	function isSelected() {
		if (!selectedDay) return false;
		const format = "DD-MM-YYYY";
		const selected = selectedDay.format(format);
		const current = day.format(format);

		return selected === current;
	}

	function getBgColor() {
		if (!(formattedDay in contributions)) return "level-1";

		if (contributions[formattedDay] < 10) {
			return "level-2";
		} else if (contributions[formattedDay] < 20) {
			return "level-3";
		} else if (contributions[formattedDay] < 30) {
			return "level-4";
		} else {
			return "level-5";
		}
	}

	return (
		<Tooltip
			title={`${contributions[formattedDay] || "No"} contributions`}
			helperText={day.format("dddd, MMMM DD, YYYY")}
			afterVisibleChange={(visible) => setSelectedDay(visible ? day : null)}
		>
			<div
				className={classNames("day", { selected: isSelected() }, getBgColor())}
			></div>
		</Tooltip>
	);
};

export default Day;
