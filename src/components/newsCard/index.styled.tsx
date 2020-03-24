import styled from 'styled-components';

const NewsImg = styled.img`
  max-width: 250px;
`;

const NewsLink = styled.a`
  color: grey;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const ImgContainer = styled.div`
  width: 250px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 8px;
`

const CardWrapper = styled.div.attrs({
  className: "border-bottom border-secondary"
})`
  &&& {
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    padding: 10px 0;
  }
`;

const NewsIframe = styled.iframe`
  height: 500px;
  border: 0;
  border-bottom: 1px solid navy;
`;

const NewsCardComponents = {
  CardWrapper,
  ImgContainer,
  NewsContainer,
  NewsIframe,
  NewsImg,
  NewsLink,
};

export default NewsCardComponents;
