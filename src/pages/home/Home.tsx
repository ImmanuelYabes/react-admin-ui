import { Panel, IconButton } from "rsuite";
import PlayIcon from "@rsuite/icons/legacy/Play";
import "./home.scss"; // Import CSS file for custom styling

const divisionList = [
  {
    logo: "user.svg",
    name: "Finance",
  },
  {
    logo: "search.svg",
    name: "Quality Control",
  },
  {
    logo: "product.svg",
    name: "Production",
  },
  {
    logo: "profile.svg",
    name: "Human Resource",
  },
];

const DashboardView = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">List Divisi</h2>
      <div className="dashboard-items">
        {divisionList.map((division, index) => (
          <Panel className="dashboard-panel" bordered key={index}>
            <div className="dashboard-content">
              <p className="dashboard-name">{division.name}</p>
              <IconButton
                icon={<PlayIcon />}
                appearance="primary"
                color="violet"
                placement="right"
              >
                Details
              </IconButton>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
};

export default DashboardView;
