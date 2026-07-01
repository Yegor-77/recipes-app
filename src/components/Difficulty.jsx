import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${(props) =>
    props.active
      ? props.level === 1
        ? "green"
        : props.level === 2
        ? "orange"
        : "red"
      : "#ddd"};
`;

export default function Difficulty({ value }) {
  return (
    <Wrapper>
      <Dot active={value >= 1} level={value} />
      <Dot active={value >= 2} level={value} />
      <Dot active={value >= 3} level={value} />
    </Wrapper>
  );
}