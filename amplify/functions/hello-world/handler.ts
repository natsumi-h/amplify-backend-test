import { Handler } from "aws-lambda";
import { Schema } from "../../data/resource";

// export const handler: Handler = async (event, context) => {
//   return { message: "Hello, World!" };
// };

export const handler: Schema["helloWorld"]["functionHandler"] = async (
  event
) => {
  return "Hello, World!";
};
