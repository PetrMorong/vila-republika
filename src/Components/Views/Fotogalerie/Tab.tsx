import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper, Container, FlexRow } from "../../../Styled/Theme.styles";
import { IconTitle } from "../../../Styled/Typography.styles";

const Tab: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#FFFFFF`}
      padding={`50px 0px 50px`}
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
                  mb={"15px"}
                  mdMargibBottom={`3px`}
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
    title: "Apartmány",
    url: "#Apartmany",
  },
  {
    title: "Exteriér",
    url: "#Exterier",
  },
  {
    title: "Wellness",
    url: "#Wellness",
  },
];
