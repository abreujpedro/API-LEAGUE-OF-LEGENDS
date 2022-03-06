import prismaCliente from "../prisma";

class GetFavoritesChampService {
  async execute(user_id: string, champ_name?: string) {
    if (!champ_name) {
      const champWithFilter = await prismaCliente.cham.findMany({
        where: { user_id, is_favorite: true },
      });
      return champWithFilter;
    }
    const champ = await prismaCliente.cham.findMany({
      where: { name: { startsWith: champ_name }, user_id },
    });
    return champ;
  }
}

export { GetFavoritesChampService };
