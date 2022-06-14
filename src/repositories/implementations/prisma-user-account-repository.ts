import { UserEntity } from "../../domain/entity/User";
import { prisma } from "../../prisma";
import { ICreateUserAccountDTO } from "../../dto/iCreateUserAccountDTO";
import { IUserAccountRepository } from "../iUserAccountRepository";

export class PrismaUserAccountRepository implements IUserAccountRepository {
  async create({
    completename,
    username,
    email,
    password,
  }: ICreateUserAccountDTO): Promise<UserEntity> {
    return await prisma.user.create({
      data: {
        completename,
        username,
        email,
        password,
      },
    });
  }

  async update({
    id,
    completename,
    username,
    email,
    password,
  }: UserEntity): Promise<UserEntity> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        completename,
        username,
        email,
        password,
      },
    });
  }

  async delete(id: string) {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return await prisma.user.findMany();
  }

  async findById(id: string): Promise<UserEntity | null> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return await prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
