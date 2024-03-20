import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
  //   console.log(category);

  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("clicked", label);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updateQuery = { ...currentQuery, category: label };

      const url = qs.stringifyUrl({
        url: "/",
        query: updateQuery,
      });
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
