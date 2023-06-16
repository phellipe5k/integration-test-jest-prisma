import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()


const list = async () => {
    const result = await prisma.user.findMany()

    return result
}

const create = async (payload: Prisma.UserCreateInput) => {
    const result = await prisma.user.create({ data: payload });
    return result;
}

export default {
    list,
    create
}