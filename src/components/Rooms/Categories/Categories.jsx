import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category._id}
            label={category.label}
            icon={category.icon}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
