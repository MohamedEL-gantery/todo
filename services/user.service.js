import { findUserById } from "../utils/services/repository/domain/user.repository.js";

const getUser = async (id) => await findUserById(id, "User not found");

export { getUser };
