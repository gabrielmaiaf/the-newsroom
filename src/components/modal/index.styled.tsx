import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const ModalClose = styled.button.attrs({
  className: "btn btn-outline-secondary",
  type: "button",
})`
  &&& {
    width: 250px;
    margin: 8px auto;
  }
`

const ModalComponents = {
  ModalClose,
  ModalContainer,
  ModalWrapper,
};

export default ModalComponents;
