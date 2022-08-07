import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMaximize,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";

const Container = (props) => {
  const { title, classes, toggleExpanded, expanded, titleIcon } = props;

  const controlIcon = expanded ? faMinimize : faMaximize;

  return (
    <div className={"Container " + classes}>
      <div className="Container-header">
        <span className="Container-title">
          { titleIcon && <FontAwesomeIcon icon={titleIcon} /> }
          {title}
        </span>
        <span className="Container-icon" onClick={toggleExpanded}>
          <FontAwesomeIcon icon={controlIcon} />
        </span>
      </div>
      <div className="Container-body">{props.children}</div>
    </div>
  );
};

export default Container;
