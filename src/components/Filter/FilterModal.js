import styled, { keyframes } from 'styled-components';

const show = keyframes`
  to {
    opacity: 1;
  }
`;

const showBody = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${show} 0.3s forwards;
`;

const ModalBody = styled.div`
  background-color: var(--elementBg);
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.375rem;
  display: grid;
  gap: 1.5rem;
  opacity: 0;
  transform: translateX(-30px);
  animation: ${showBody} 0.5s forwards;
`;

const FilterModal = ({ setModal, children }) => {
  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) setModal(false);
  };
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>
  );
};

export default FilterModal;
