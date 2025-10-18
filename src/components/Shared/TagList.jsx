import { Link } from "react-router-dom";

const TagList = ({ tags }) => {
  return (
    <ul className="tag-list d-flex align-items-center flex-wrap gap-sm-4 gap-2">
      {tags?.map((tag, index) => {
        return (
          <li key={index}>
            <Link to={tag.link} className="fw-normal text-nowrap">
              {tag.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
