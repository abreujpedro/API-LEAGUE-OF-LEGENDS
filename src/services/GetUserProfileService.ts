import prismaCliente from "../prisma";

class GetUserProfileService {
    async execute(user_id: string) {
       const user = await prismaCliente.user.findFirst({where:{id: user_id}});
       return user;
    }
}

export{GetUserProfileService}