import prismaCliente from "../prisma";

class GetChampsService {
  async execute(user_id: string, champ_name?: string) {
    if (!champ_name) {
      const champWithFilter = await prismaCliente.cham.findMany({
        where: { user_id },
      });
      return champWithFilter;
    }
    const champ = await prismaCliente.cham.findMany({
      where: { name: { startsWith: champ_name }, user_id },
    });
    return champ;
  }
}

export { GetChampsService };
