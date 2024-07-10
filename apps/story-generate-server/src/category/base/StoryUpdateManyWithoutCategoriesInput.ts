/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StoryWhereUniqueInput } from "../../story/base/StoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StoryUpdateManyWithoutCategoriesInput {
  @Field(() => [StoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoryWhereUniqueInput],
  })
  connect?: Array<StoryWhereUniqueInput>;

  @Field(() => [StoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoryWhereUniqueInput],
  })
  disconnect?: Array<StoryWhereUniqueInput>;

  @Field(() => [StoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoryWhereUniqueInput],
  })
  set?: Array<StoryWhereUniqueInput>;
}

export { StoryUpdateManyWithoutCategoriesInput as StoryUpdateManyWithoutCategoriesInput };