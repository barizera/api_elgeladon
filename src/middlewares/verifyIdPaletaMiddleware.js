import paletas from "../database";

const verifyIdPaletaMiddleware = (req, res, next) => {
  const id = Number(req.params.id);
  const chosedPaleta = paletas.find((element) => element.id === id);

  if (!chosedPaleta) {
    return res.status(404).send("Não estamos achando a paleta solicitada.");
  }

  next();
};

export default verifyIdPaletaMiddleware;
