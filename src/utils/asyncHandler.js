export const asyncHandler = (reqFunction) => {
  return (req,res,next) => {
    Promise.resolve(reqFunction)
    .catch((err) => {
        next(err)
    });
  };
};
