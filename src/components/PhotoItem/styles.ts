import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    padding: 10px 0px;
  }

  .img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
    max-height: 150px;
    margin: auto;
  }

  button {
    margin-top: 20px;
    padding: 5px;
    border-radius: 10px;
    border: 0;
    font-size: medium;
    cursor: pointer;
  }

  button:hover {
    background-color: red;
  }
`;
