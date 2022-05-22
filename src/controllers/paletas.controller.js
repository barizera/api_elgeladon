import PaletasServices from "../services/paletas.service";

const paletasServices = new PaletasServices();

class PaletaControllers {
  getAllPaletas(req, res) {
    try {
      const allPaletas = paletasServices.getAllPaletas();
      res.send(allPaletas);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  getPaletasById(req, res) {
    const id = Number(req.params.id);
    if (!id) {
      res.status(404).send("Não temos nenhuma paleta cadastrada.");
    } else {
      const paleta = paletasServices.getPaletasById({ id });
      res.send(paleta);
    }
  }

  createPaleta(req, res) {
    const { sabor, preco, descricao, foto, id } = req.body;
    const newPaleta = paletasServices.createPaleta({
      sabor,
      preco,
      descricao,
      foto,
    });
    res.send(newPaleta);
  }

  updatePaleta(req, res) {
    const { sabor, preco, descricao, foto } = req.body;
    const id = Number(req.params.id);

    const paletaUpdate = paletasServices.updatePaleta({
      sabor,
      preco,
      descricao,
      foto,
      id,
    });
    res.send(paletaUpdate);
  }

  deletePaleta(req, res) {
    const id = Number(req.params.id);

    paletasServices.deletePaleta(id);
    res.send("Paleta deletada com Sucesso!");
  }
}

export default PaletaControllers;
