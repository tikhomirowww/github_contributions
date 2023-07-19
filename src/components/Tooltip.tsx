import RCTooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";

interface ITooltipProps extends Omit<TooltipProps, "overlay"> {
	title: string;
	helperText?: string;
}

const Tooltip = ({ title, helperText, children, ...props }: ITooltipProps) => {
	return (
		<RCTooltip
			placement="top"
			trigger={["click"]}
			overlay={
				<>
					<p className="tooltip-text">{title}</p>
					{helperText && <p className="tooltip-helper-text">{helperText}</p>}
				</>
			}
			{...props}
		>
			{children}
		</RCTooltip>
	);
};

export default Tooltip;
