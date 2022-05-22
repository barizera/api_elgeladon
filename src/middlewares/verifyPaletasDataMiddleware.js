import paletas from "../database";

const verifyPaletasDataMiddleware = (req, res, next) => {
  const { sabor, preco, descricao, foto } = req.body;
  if (!sabor || !preco || !descricao || !foto) {
    return res.status(422).send("Preencha todos os campos.");
  }
  next();
};

export default verifyPaletasDataMiddleware;
