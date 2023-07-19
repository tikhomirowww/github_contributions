import { Dayjs } from "dayjs";

interface IWeekDaysProps {
	weekDays: Dayjs[];
}

const WeekDays = ({ weekDays }: IWeekDaysProps) => {
	function showWeekDay(n: number): boolean {
		return n === 0 || n === 2 || n === 4;
	}
	return (
		<>
			{weekDays.map((day, i) =>
				showWeekDay(i) ? (
					<p className="week-day capitalize" key={i}>
						{day.format("dd")}
					</p>
				) : (
					<p key={i}></p>
				)
			)}
		</>
	);
};

export default WeekDays;
