import styled from "styled-components";

export const Container = styled.div`
  ::-webkit-scrollbar {
    width: none;
    max-height: 5px;
  }

  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 10px;
  }
`;

export const TableHead = styled.thead`
  background: #F5F6FA;

  .tableRow {
    text-align: left;
  }
  .tableHeader {
    height: 66px;
    text-align: left;
    background: #F5F6FA;
    color: #707070;
    position: sticky;
    font-size: 16px;
    top: 0px;
    padding: 16px 25px 16px 0px;
    z-index: 1;

    &:first-child {
      padding-left: 62px;
      width: 350px;
    }

    &:last-child {
      width: 100px;
    }

    > span {
      position: relative;

      > svg {
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }
  }
`;

export const TableBody = styled.tbody`
  margin-top: 20px;

  tr {
    height: 66px !important;
    background: #f9fafc;
    border-radius: 25px;
    box-shadow: none;
    transition: 0.4s;
    font-size: 16px;

    @media(min-height: 1150px) {
      height: 80px !important;
    }
    
    &.is-detailsLink {
      cursor: pointer;
    }

    &:hover {
      background: #FFFFFF;
      box-shadow: 0px 3px 6px #D7D8E4;
      border-left-style: none;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
  }

  td {
    position: relative;
    color: #989AB8;
    background: transparent;

    :first-child {
      border-left-style: none;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;

      svg {
        margin-right: 30px;
        margin-left: 30px;
        fill: #D7D8E4
      }

      div {
        margin-right: 25px;
        display: flex;
        align-items: center;
      }

      div > img {
        width: 40px;
        object-fit: cover;
        margin-right: 30px;
        height: 40px;
      }
    }

  :last-child {
    border-right-style: none;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
  }

  > svg {
    font-size: 18px;
    fill: #707070;
    opacity: 0.3;
    transition: 0.4s;
    margin-right: 20px;
    text-align: center;

    &:hover {
      opacity: 1;
    }
  }
}
`;