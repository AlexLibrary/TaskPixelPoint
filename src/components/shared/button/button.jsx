import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  base: 'text-base leading-none',
  size: {
    link: 'text-base font-normal',
    icon: 'w-12 h-12 rounded-full',
    md: 'p-4 px-[50.5px] rounded-full',
    sm: 'px-[18px] py-[10px] rounded-full',
  },
  theme: {
    link: '',
    white: 'bg-white text-black',
    primary: 'bg-primary-1 text-black',
  },
};

const Button = ({ className, to, size, theme, children, ...otherProps }) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
