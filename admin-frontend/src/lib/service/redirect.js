const { NODE_ENV } = process.env

const logoutURL = () => {
  if (NODE_ENV === 'development') return 'http://localhost:4000';
  return 'http://admin.freemedicals.org';
};


export default logoutURL