import prismaCliente from "../prisma";
import CustomEror from "../utils/customEror";

class CreateChampService {
  async execute(
    name: string,
    user_id: string,
    is_favorite: boolean,
    style: string,
    picture_url: string
  ) {
    if (!name || is_favorite === null || !style || !picture_url) {
      throw new CustomEror("Campo nulos são inválido", 400);
    }
    const { id: style_id } = await prismaCliente.style.findFirst({
      where: { name: style },
    });

    const champ = await prismaCliente.cham.create({
      data: {
        name,
        user_id,
        is_favorite,
        style_id,
        picture_url,
      },
    });
    return champ;
  }
}

export { CreateChampService };
