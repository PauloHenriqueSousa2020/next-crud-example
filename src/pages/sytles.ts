import styled from "styled-components";

export const Container = styled.section`
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
