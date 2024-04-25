import styled from "styled-components";
import { Cards } from "../Column/ColumnStyle";
import { TopicStyles } from "../../lib/topic";

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  ${Cards}
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic, $theme }) => {
      const background = TopicStyles[$topic]?.backgroundColor || "#94A6BE";
      return $theme === "dark" ? TopicStyles[$topic]?.text : background;
    }};
  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $topic, $theme }) => {
      const color = TopicStyles[$topic]?.color || "#FFFFFF";

      return $theme === "dark" ? "#FFFFFF" : color;
    }};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & svg {
    width: 13px;
  }
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;
