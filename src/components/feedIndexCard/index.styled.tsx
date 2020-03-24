import styled from 'styled-components';

const ArticleTitle = styled.a.attrs({
  className: "font-weight-bold mb-0"
})`
  &&& {
    color: navy
  }
`;

const SeeButton = styled.span`
  cursor: pointer;
  text-transform: capitalize;
`;

const FeedIndexCardComponents = {
  ArticleTitle,
  SeeButton,
}

export default FeedIndexCardComponents;
