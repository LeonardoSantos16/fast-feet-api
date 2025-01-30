import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { role, User } from '../../enterprise/entities/user';

interface CreateUserUseCaseRequest {
  cpf: number;
  telephone: number;
  email: string;
  password: string;
  name: string;
  address: string;
  role: role;
}

export class CreateUserUseCase {
  async execute({
    cpf,
    telephone,
    email,
    password,
    name,
    address,
    role,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseRequest> {
    const user = User.create({
      cpf,
      telephone,
      email,
      password,
      name,
      address,
      role,
    });

    return user;
  }
}
