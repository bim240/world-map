import styled from "styled-components";

export const StyledPopoverContent = styled.div`
  padding: 1rem;
  min-width: 15rem;
  display: flex;
  flex-direction: column;
  .single_row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .icon {
    align-self: flex-end;
    cursor: pointer;
  }
`;
