/**
 *  add the execution time of a function that returns an object
 *  @param {() => ({})} callback
 */
const withDuration = async (callback) => {
  const startTime = process.hrtime();

  const result = await callback();

  const duration = process.hrtime(startTime);

  const miliSeconds = duration[1] / 10000000;
  const time = `${duration[0]}s ${miliSeconds.toFixed(6)}ms`;
  const inTime = duration[0] < 3;

  if (process.env.NODE_ENV !== 'test') {
    const { exerciseName, results } = result;
    return {
      exercise_name: exerciseName, time, in_time: inTime, results,
    };
  }

  return { duration: Math.floor(duration), time };
};

module.exports = withDuration;
