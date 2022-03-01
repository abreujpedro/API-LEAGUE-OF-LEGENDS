import prismaCliente from "../prisma";

class GetChampsService {
    async execute(user_id: string) {
       const champ = await prismaCliente.cham.findMany({where:{user_id: user_id}});
       return champ;
    }
}

export{GetChampsService}