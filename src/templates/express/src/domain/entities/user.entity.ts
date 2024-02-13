import { Entity } from '@core/domain/Entity';
import { Replace } from '@core/helpers/Replace';

export type UserProps = {
  email: string;
  name: string;
  password: string;
  userKey: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User extends Entity<UserProps> {
  get email() { return this.props.email }
  get name() { return this.props.name }
  get password() { return this.props.password }
  get userKey() { return this.props.userKey }
  get createdAt() { return this.props.createdAt }
  get updateAt() { return this.props.updatedAt }

  static create(
    props: Replace<UserProps, {createdAt?: Date}>,
    id?: string,
  ) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return user;
  }
}
