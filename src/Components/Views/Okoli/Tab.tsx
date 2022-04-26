import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper, Container, FlexRow } from "../../../Styled/Theme.styles";
import { IconTitle } from "../../../Styled/Typography.styles";

const Tab: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#FFFFFF`}
      padding={`40px 0px`}
      xlPadding={`50px 0px 50px`}
      mdPadding={`50px 0px 50px`}
      className="tab"
    >
      <Container margin={`auto`} maxWidth={`680px`}>
        <FlexRow width={`100%`} height={`100%`} between>
          {data.map((item, index) => {
            return (
              <AnchorLink href={item.url} key={index}>
                <IconTitle
                  fontSize={`18px`}
                  xlfontSize={`18px`}
                  mdFontSize={`18px`}
                  mdLineheight={`20px`}
                  textAlign={`center`}
                  smFontSize={`18px`}
                  smLineheight={`26px`}
                  fontWeight={`400`}
                  xlfontWeight={`400`}
                  smFontWeight={`400`}
                  mdfontWeight={`400`}
                  color={`#262B3B`}
                  mb={""}
                  mdMargibBottom={``}
                >
                  {item.title}
                </IconTitle>
              </AnchorLink>
            );
          })}
        </FlexRow>
      </Container>
    </Wrapper>
  );
};

export default Tab;

const data = [
  {
    title: "Velké Losiny",
    url: "#VelkeLosiny",
  },
  {
    title: "Jeseníky",
    url: "#Jeseniky",
  },
  {
    title: "Výlety",
    url: "#Vylety",
  },
];
