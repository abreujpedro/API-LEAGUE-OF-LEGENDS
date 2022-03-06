import prismaCliente from "../prisma";

class GetStylesService {
  async execute() {
    const style = await prismaCliente.style.findMany({
      select: { name: true, id: true },
    });
    return style;
  }
}

export { GetStylesService };
