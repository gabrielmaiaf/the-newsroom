import styled from 'styled-components';

const ArticleTitle = styled.a.attrs({
  className: "font-weight-bold mb-0"
})`
  &&& {
    color: navy
  }
`;

const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`

const IndexComponents = {
  ArticleTitle,
  PageTitle,
}

export default IndexComponents;
