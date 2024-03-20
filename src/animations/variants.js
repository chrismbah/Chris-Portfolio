export const variants1 = {
    initial: {
      opacity: 0,
      y: -80,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.4,
      },
    }),
  };
  export const variants2 = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.4,
      },
    }),
  };
  export const variants3 = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.4,
      },
    }),
  }; 
  export const variants4 = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.4,
      },
    }),
  };