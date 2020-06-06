import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;

const Footer = () => (
  <StyledContainer>
    <StyledMetadata tabindex="-1">
      <StyledGitHubLink
        href="https://github.com/PiotrNap"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>Built by Piotr Napierala</div>
      </StyledGitHubLink>
    </StyledMetadata>
  </StyledContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
