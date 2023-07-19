import { useMemo, useState } from "react";
import { getDates, getMonths } from "../utils/date";
import Day from "./Day";
import Levels from "./Levels";

const ContributionGraph = () => {
	const dates = useMemo(getDates, []);
	const months = getMonths();

	const [selectedDay, setSelectedDay] = useState(null);

	function showWeekDay(n) {
		return n === 0 || n === 2 || n === 4;
	}

	return (
		<div>
			<div className="table">
				<div className="table__head">
					{months.map((month) => (
						<p className="capitalize" key={month}>
							{month}
						</p>
					))}
				</div>

				<div className="table__body">
					{dates.slice(0, 7).map((day, i) =>
						showWeekDay(i) ? (
							<p className="week-day capitalize" key={i}>
								{day.format("dd")}
							</p>
						) : (
							<p key={i}></p>
						)
					)}
					{dates.map((day, i) => (
						<Day
							selectedDay={selectedDay}
							setSelectedDay={setSelectedDay}
							key={i}
							day={day}
						/>
					))}
				</div>
			</div>
			<Levels />
		</div>
	);
};

export default ContributionGraph;
