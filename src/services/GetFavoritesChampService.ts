import prismaCliente from "../prisma";

class GetFavoritesChampService {
    async execute(user_id: string) {
       const champ = await prismaCliente.cham.findMany({where:{user_id: user_id, is_favorite: true}});
       return champ;
    }
}

export{GetFavoritesChampService}