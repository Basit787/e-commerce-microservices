import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}
