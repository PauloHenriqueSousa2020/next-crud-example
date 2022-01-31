import styled from "styled-components";

export const Container = styled.section`

  .headerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .listHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }

  .notFoundText {
    background: #FFFFFF;
    text-align: center;

    td:first-child {
      transition: none;
      opacity: 1;
    }

    &:hover {
      background: #FFFFFF;
      box-shadow: none;
    }
  }

  .projectListLastTd {
    padding-right: 30px;
  }

  table {
    table-layout: fixed;
  }
  
  .tableHeader:first-child {
    width: auto;
  }
`;

export const Button = styled.button`
  width: 18rem;
  height: 3rem;
  cursor: pointer;
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  border: 1px solid #004D7C;
  background: #BB0A1E;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    background: #004D7C;
    transition: transform 0.8s ease 0s;
    transform: scale(1.05);
    opacity: 0.8;
  }
`