import { NavLink } from "react-router-dom";
import * as AppIcons from "react-icons/fa6";

export default function AppNavigation(props) {
  return (
    <div className="Navigation--section">
      <>
        <NavLink to="*">
          {" "}
          <AppIcons.FaListCheck /> Daily Routines
        </NavLink>
        <NavLink to="ImportantSchedules">Important Schedules</NavLink>
        <NavLink to="Planned">Planned</NavLink>
        <NavLink to="Myfinances">My Budgets</NavLink>
        <NavLink to="MyInspirations">My Inspirations</NavLink>
      </>
      <div className="nav--children">{props.children}</div>
    </div>
  );
}
