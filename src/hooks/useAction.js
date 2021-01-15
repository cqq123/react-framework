import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const useAction = (options) => {
  const [pending, setPending] = useState();

  // const actionSaved = useRef(options.fn);
  // const matchSaved = useRef(options.match);
  const mounted = useRef();

  useLayoutEffect(() => {
    // matchSaved.current = options.match;
    // actionSaved.current = options.fn;
  });

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  const action = useCallback(async (...args) => {
    if (!mounted.current || pending) {
      return;
    }
    const matched = options.match ? options.match(...args) : true;
    if (!matched) {
      return;
    }
    setPending(true);
    try {
      const ret = await options.fn(...args);
      if (mounted.current && options.resolve) {
        options.resolve(ret);
      }
    } catch (error) {
      if (mounted.current && options.reject) {
        if (error.message !== '981') {
          options.reject(error);
        }
        throw error;
      }
    } finally {
      if (mounted.current) {
        setPending(false);
        if (options.final) {
          options.final();
        }
      }
    }
  }, [pending, options]);

  return {
    action,
    pending,
  };
};

export default useAction;
