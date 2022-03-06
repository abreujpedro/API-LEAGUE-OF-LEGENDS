import prismaCliente from "../prisma";

class GetTopChampService {
    async execute(user_id: string) {
       const champ = await prismaCliente.cham.findMany(
         {
           where:{user_id: user_id, is_favorite: true},
           take: 3
          }
         );

       return champ;
    }
}

export{GetTopChampService}