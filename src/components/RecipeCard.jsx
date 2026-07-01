import styled from "styled-components";
import Difficulty from "./Difficulty";

const Card = styled.div`
  width: 250px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
`;

const Info = styled.p`
  font-size: 12px;
  color: gray;
`;

export default function RecipeCard({ recipe }) {
  return (
    <Card>
      <Img src={recipe.img} />
      <Content>
        <Title>{recipe.title}</Title>
        <Info>{recipe.time}</Info>
        <Info>{recipe.servings}</Info>
        <Info>{recipe.calories}</Info>

        <Difficulty value={recipe.difficulty} />
      </Content>
    </Card>
  );
}