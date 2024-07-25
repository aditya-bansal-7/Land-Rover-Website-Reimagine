import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import useModelStore from './store';

const ModelName = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewModel = useModelStore((state) => state.setInViewModel);
  const inViewModel = useModelStore((state) => state.inViewModel);

  useEffect(() => {
    if (isInView) setInViewModel(id);
    if (!isInView && inViewModel === id) setInViewModel(null);
  }, [isInView, id, setInViewModel]);

  return (
    <p ref={ref} className={`py-16 transition-colors text-4xl lg:text-5xl ${isInView ? 'text-black' : 'text-gray-300'}`}>
      {children}
    </p>
  );
};

export default ModelName;