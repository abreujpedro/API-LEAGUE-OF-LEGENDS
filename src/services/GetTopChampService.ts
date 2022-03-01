import prismaCliente from "../prisma";

class GetTopChampService {
    async execute(user_id: string) {
       const champ = await prismaCliente.cham.findMany({where:{user_id: user_id, is_favorite: true}});

        const lastFavChamps = []
        const numberOfReturn = Math.min(champ.length, 3)
       for (let i = 1; i <= numberOfReturn; i++) {
        lastFavChamps.push(champ[champ.length - i]);
      }

       return lastFavChamps;
    }
}

export{GetTopChampService}