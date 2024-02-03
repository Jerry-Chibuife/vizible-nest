import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop()
  middle_name: string;
  @Prop({ unique: true })
  username: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop()
  date_added: string = new Date().toDateString();
}

export const UserSchema = SchemaFactory.createForClass(User);
