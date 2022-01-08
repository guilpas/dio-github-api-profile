import styled from "styled-components";

export const WrapperImg = styled.img`
  width: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  flex: 0 0 auto;
`
export const Counts = ({ title, counts }) => {
  return (
    <div className="p-2 flex-column text-center">
      <h6>{title}</h6>
      <span>{counts}</span>
    </div>
  )
}
