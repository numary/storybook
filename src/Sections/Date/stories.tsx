import React from 'react';
import { Date } from './index';
import { storyDocsParameters } from '../../utils';
import { theme } from '../../muiTheme';

export default {
  title: 'Design System/Sections/Date',
  component: Date,
};

export const DateWithMessageSection = () => (
  <div>
    <Date timestamp="123456789" message="Created on" />
  </div>
);
DateWithMessageSection.storyName = 'With message';
DateWithMessageSection.parameters = storyDocsParameters;

export const DefaultDateSection = () => (
  <div>
    <Date timestamp="123456789" />
  </div>
);
DefaultDateSection.storyName = 'Default';
DefaultDateSection.parameters = storyDocsParameters;

export const DateWithColorAndFormat = () => (
  <div>
    <Date
      timestamp="123456789"
      format="DD/MM/YYYY"
      color={theme.palette.violet.bright}
    />
  </div>
);
DateWithColorAndFormat.storyName = 'With color and format';
DateWithColorAndFormat.parameters = storyDocsParameters;
