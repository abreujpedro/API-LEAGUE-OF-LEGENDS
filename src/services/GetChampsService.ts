import prismaCliente from "../prisma";

class GetChampsService {
  async execute(user_id: string, champ_name?: string, champ_category?: string) {
    const champ = await prismaCliente.cham.findMany({
      where: {
        name: champ_name ? { startsWith: champ_name } : undefined,
        user_id,
        style_id: champ_category ? champ_category : undefined,
      },
    });
    return champ;
  }
}

export { GetChampsService };
