const info = (...params) => {
  if (process.env.Node_ENV === 'production') return;

  console.log(...params);
};

const error = (...params) => {
  if (process.env.Node_ENV === 'production') return;

  console.log(...params);
};

export default { info, error };
