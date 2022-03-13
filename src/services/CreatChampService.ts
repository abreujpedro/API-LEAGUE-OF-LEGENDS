import prismaCliente from "../prisma";

class CreateChampService {
  async execute(
    name: string,
    user_id: string,
    is_favorite: boolean,
    style: string,
    picture_url: string
  ) {
    if (!name || !user_id || is_favorite === null || !style || !picture_url) {
      throw new Error("campo inválido");
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
