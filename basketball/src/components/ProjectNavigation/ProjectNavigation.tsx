import { NavLink } from "react-router";

const ProjectNavigation = () => {
  return (
    <div className="navigation-wrapper">
      <nav className="project-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-link" to={"nba/west"} end>
              {" "}
              NBA West conference
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"nba/east"} end>
              {" "}
              NBA East conference
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"europe/euroleague"} end>
              {" "}
              Euroleague teams
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProjectNavigation;
