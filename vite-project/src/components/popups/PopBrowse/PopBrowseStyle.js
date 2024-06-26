import styled from "styled-components";
import { TopicStyles } from "../../../lib/topic";
import { Hover01, Hover03 } from "../../../styles/shared";

export const PopBrows = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  max-width: 750px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategotiesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  opacity: 1;
  display: block;
  opacity: 1 !important;
  background-color: ${({ $topic, $theme }) => {
    const background = TopicStyles[$topic]?.backgroundColor || "#94A6BE";
    return $theme === "dark" ? TopicStyles[$topic]?.text : background;
  }};
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({ $topic, $theme }) => {
      const color = TopicStyles[$topic]?.color || "#FFFFFF";

      return $theme === "dark" ? "#FFFFFF" : color;
    }};
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const PopBrowseStatusP = styled.p`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.label`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: ${({ $theme }) => ($theme === "dark" ? "#20202c" : "#fff")};
  &:hover{
    background-color: #94a6be;
    & p{ 
    color: ${({ $theme }) => $theme === 'dark' ? '#000' : '#fff'};

    }
  }
  & p {
    color: #94a6be;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const StatusThemeLight = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${(props) => props.theme.text};
  background-color: ${({ $theme }) => $theme === 'dark' ? '#94a6be' : '#fff'};
  color: ${({ $theme }) => $theme === 'dark' ? '#000' : '#94a6be'};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;
export const PopBrowseCalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const BtnGroup = styled.div`
  gap: 20px;
  & button {
    margin-right: 8px;
  }
`;

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  & a {
    color: #565eef;
  }
  ${Hover03}
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  & a {
    color: #ffffff;
  }
  ${Hover01}
`;

export const EditInput = styled.input`
  display: none;
`;

export const EditLabel = styled.label`
  color: #94a6be;

  & p {
    color: #94a6be;

    &:hover {
      color: #fff;

      background-color: #94a6be;
    }
  }
`;
