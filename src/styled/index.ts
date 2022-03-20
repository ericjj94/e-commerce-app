import styled from "styled-components";

interface SmallButtonInterface {
  backgroundColor?: string;
  button?: string;
}

export const SmallButton = styled.button<SmallButtonInterface>`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#198754")};
  color: #fff;
  max-width: ${(props) => (props.button === "medium" ? "300px" : "150px")};
  height: 50px;
  border-radius: 10px;
`;

export const HeadingText = styled.div`
  font-size: 18px;
  line-height: 56px;
  font-weight: 500;
`;

export const PriceText = styled.div`
  font-weight: 500;
  color: #212121;
  font-size: 28px;
  vertical-align: sub;
`;

export const ProductDescriptionText = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const SmallImage = styled.img`
  height: 150px;
  width: 150px;
`;
