import React from 'react';
import PropTypes from 'prop-types';
import {
  IconExternal,
  IconFolder,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLocation,
  IconLogo,
  IconFacebook,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Facebook':
      return <IconFacebook />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
