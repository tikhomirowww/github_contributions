import { useMemo } from "react";
import { getDates, getMonths } from "../utils/date";
import Day from "./Day";

const ContributionGraph = () => {
	const dates = useMemo(getDates, []);
	const months = getMonths();

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
					{dates.slice(0, 7).map((day, i) => (
						<p className="capitalize" key={i}>
							{day.format("dd")}
						</p>
					))}
					{dates.map((day, i) => (
						<Day key={i} day={day} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ContributionGraph;
