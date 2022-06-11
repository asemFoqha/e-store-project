import styled from "styled-components";

export const StyledEpisode = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #433d3dad;
  border-bottom: 1px solid #000;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 10px;
  }

  ul {
    list-style: circle;
    padding-left: 20px;
  }
`;
