'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Error from 'svgs/error.inline.svg';
import Loading from 'svgs/loading.inline.svg';
import Success from 'svgs/success.inline.svg';

import Button from '../button';

const button = {
  normal:
    'hover:bg-primary-2 ease-out duration-200 text-base leading-none bg-primary-1 text-black absolute top-[50%] right-[6px] translate-y-[-50%] p-4 px-[50.5px] rounded-full z-[3]',
  loading:
    'ease-out duration-200 w-12 h-12 bg-primary-1 text-white absolute top-[50%] right-[6px] translate-y-[-50%] rounded-full z-[3] flex justify-center items-center',
  success:
    'ease-out duration-200 w-12 h-12 bg-[#40BFAA] text-white absolute top-[50%] right-[6px] translate-y-[-50%] rounded-full z-[3] flex justify-center items-center',
  error:
    'ease-out duration-200 w-12 h-12 bg-primary-2 text-white absolute top-[50%] right-[6px] translate-y-[-50%] rounded-full z-[3] flex justify-center items-center',
};

const regex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm;
const matchValue = (value) => !value.match(regex);

const Input = ({ type = 'email', placeholder = 'Your business email...', ...otherProps }) => {
  const [state, setState] = useState('normal');
  const [errorMessage, setErrormessage] = useState('');
  const [email, setEmail] = useState('');
  const onChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setErrormessage('');
  };
  const onClick = () => {
    if (matchValue(email)) {
      setErrormessage('Email is a required field');
    } else {
      setState('loading');
      setTimeout(() => {
        setState('success');
      }, 3000);
      setTimeout(() => {
        setState('error');
        setEmail('Oops! Something went wrong');
      }, 6000);
    }
  };
  const onClickError = () => {
    if (state === 'error') {
      setState('normal');
      setEmail('');
    }
    return null;
  };

  return (
    <div className="w-[504px] h-[60px] mb-11 relative">
      <div className="w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-full bg-gradient-to-r from-[#3f2a43] to-[#5a3f64]  absolute left-[-1px] top-[-1px] z-0" />
      <div className="w-[100%] h-[100%] rounded-full absolute left-0 top-0 bg-gradient-to-r from-[#251926] to-[#332439] z-[1]" />
      <label className="p-5 pl-8 cursor-text block absolute left-0 top-0 w-[100%] h-[100%] rounded-full z-[2]">
        <input
          type={type}
          placeholder={placeholder}
          className="w-[290px] font-light outline-none bg-inherit font-roboto text-base py-6 leading-none absolute top-[50%] translate-y-[-50%] text-white"
          value={email}
          onChange={onChange}
          {...otherProps}
        />
      </label>
      <Button
        className={clsx(
          state === 'normal' && button.normal,
          state === 'loading' && button.loading,
          state === 'success' && button.success,
          state === 'error' && button.error
        )}
        onClick={state === 'normal' ? onClick : onClickError}
      >
        {state === 'normal' && 'Free Trial'}
        {state === 'loading' && <Loading className="h-9 animate-spin" />}
        {state === 'success' && <Success className="h-4" />}
        {state === 'error' && <Error className="h-4" />}
      </Button>
      {errorMessage && (
        <div className="absolute top-[calc(100%+12px)] left-8 text-base leading-none text-[#F04242]">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
