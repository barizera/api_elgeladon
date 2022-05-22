import paletas from "../database";

class PaletasServices {
  getAllPaletas() {
    if (paletas.length === 0) {
      throw { status: 404, message: "Nenhuma paleta encontrada" };
    }
    return paletas;
  }

  getPaletasById({ id }) {
    const chosedPaleta = paletas.find((element) => element.id === id);
    return chosedPaleta;
  }

  createPaleta({ sabor, preco, descricao, foto, id }) {
    const novoId =
      paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;
    const newPaleta = {
      id: novoId,
      sabor,
      preco,
      descricao,
      foto,
    };

    paletas.push(newPaleta);
    return newPaleta;
  }

  updatePaleta({ sabor, preco, descricao, foto, id }) {
    const paletaUpdated = {
      id,
      sabor,
      preco,
      descricao,
      foto,
    };

    const paletaIndex = paletas.findIndex((element) => element.id === id);
    paletas[paletaIndex] = paletaUpdated;
    return paletaUpdated;
  }

  deletePaleta(id) {
    const paletaIndex = paletas.findIndex((element) => element.id === id);
    paletas.splice(paletaIndex, 1);
  }
}

export default PaletasServices;
