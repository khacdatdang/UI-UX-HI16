import React from 'react';
import title from '../../styles/modules/title.module.scss';

function PageTitle({ children, ...rest }) {
  return (
    <p className={title} {...rest}>
      {/* {children} */}Hello
    </p>
  );
}

export default PageTitle;
