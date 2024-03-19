import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";

const Categories = () => {
  return (
    <Container>
      <div>{categories.length}</div>
    </Container>
  );
};

export default Categories;
