import * as React from 'react';

interface EmailTemplateProps {
  code: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  code,
}) => (
  <div>
    <h1>Welcome, this is your code {code}.</h1>
  </div>
);