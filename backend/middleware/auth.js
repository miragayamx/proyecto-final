const auth = (req, res, next) => {
  const user = req.user;
  if (user) return next();
  const errorObj = {
    error: -1,
    descripcion: `ruta ${req.url} método ${req.method} no autorizada`,
  };
  return res.status(401).json(errorObj);
};

module.exports = auth;
