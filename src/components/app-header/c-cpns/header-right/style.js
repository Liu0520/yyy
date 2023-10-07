import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${props => props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
      
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 77px;
    height: 42px;
    margin-right: 24px; 

    /* box-sizing: border-box; */
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;


    ${props => props.theme.mixin.boxShadow}


  }
`
