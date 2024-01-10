import PropTypes from 'prop-types';
import React from 'react';

const Advantage = ({ header, subhead, text }) => (
  <article className="flex items-start flex-col">
    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#D383FC] from-[22%] via-[#CB6AFB] via-40% to-primary2Alpha to-[87%] font-poppins text-[136px] leading-none font-extralight tracking-tight drop-shadow-primary5xl mb-[14px]">
      {header}
    </h2>
    <h3 className="text-gray-98 text-2xl font-medium leading-7">{subhead}</h3>
    <div className="w-full border-b-2 border-white opacity-10 my-8" />
    <p className="text-gray-94 text-lg font-light leading-7">{text}</p>
  </article>
);

Advantage.propTypes = {
  header: PropTypes.string,
  subhead: PropTypes.string,
  text: PropTypes.string,
};

export default Advantage;
