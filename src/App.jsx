import styled from "styled-components";
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import { GlobalStyle } from "./styles/globalStyle";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Recipes</h1>
      <Grid>
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </Grid>
    </>
  );
}