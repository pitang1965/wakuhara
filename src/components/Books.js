import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #777;
  background-color: #f9f9f9;
  gap: 10px;
  padding-top: 30px;
  margin-bottom: 0.5rem;
`;

const Book = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.code,
      }}
    ></div>
  );
};

const Books = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        <Book
          code={`
            <iframe
              style="width:120px;height:240px;"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4908925763&linkId=40e74400c69a2d363ae23d78f8996f89"
            ></iframe>
        `}
        />
        <Book
          code={`
            <iframe
            style="width:120px;height:240px;"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4908925666&linkId=2c69cf8cf8cf883547cc8ef5ebdd1a7c"
            ></iframe>
        `}
        />
        <Book
          code={`
            <iframe
              style="width:120px;height:240px;"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4864719942&linkId=bbc6b97b5ce01dc7fbe193cc43f74c31"
            ></iframe>
        `}
        />
        <Book
          code={`
          <iframe
            style="width:120px;height:240px;"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4344038134&linkId=0782ae42e3bd3f35187aeacd3fbf04d8"
          ></iframe>
        `}
        />
        <Book
          code={`
          <iframe
          style="width:120px;height:240px;"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4880863750&linkId=8d117174f4b5efbf2471e5ea9866b202"
          ></iframe>
        `}
        />
        <Book
          code={`
          <iframe style="width:120px;height:240px;"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=en_US&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4910064516&linkId=84846263f1e5ea0280eceaabcd6a1ceb">
          </iframe>
        `}
        />
      </Carousel>
    </Container>
  );
};

export default Books;
