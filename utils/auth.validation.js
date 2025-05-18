import joi from "joi";

export const AuthSchema = (user) => {
  const schema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20),
    passwordConform: joi.ref("password"),
  });

  return schema.validate(user);
};

export const AuthSchemaLogin = (user) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20),
  });
  return schema.validate(user);
};
