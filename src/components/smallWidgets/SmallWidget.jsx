import "./smallwidget.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function SmallWidget() {
  return (
    <div className="smallWidget">
      <span className="smallWidgetTitle">New Join Members</span>
      <ul className="smallWidgetList">
        <li className="smallWidgetListItem">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png?v=1632930327"
            alt=""
            className="smallWidgetImg"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Abhilash </span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <VisibilityIcon className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png?v=1632930327"
            alt=""
            className="smallWidgetImg"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">John Cena</span>
            <span className="smallWidgetUserTitle">WWE Wrestler</span>
          </div>
          <button className="smallWidgetButton">
            <VisibilityIcon className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png?v=1632930327"
            alt=""
            className="smallWidgetImg"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Shahrukh khan</span>
            <span className="smallWidgetUserTitle">Bank Manager</span>
          </div>
          <button className="smallWidgetButton">
            <VisibilityIcon className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png?v=1632930327"
            alt=""
            className="smallWidgetImg"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Arjit Singh</span>
            <span className="smallWidgetUserTitle">Singer</span>
          </div>
          <button className="smallWidgetButton">
            <VisibilityIcon className="smallWidgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
