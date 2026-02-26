// app/api/docs/route.ts

import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Users API Documentation",
      version: "1.0.0",
      description: "API documentation for Users endpoint",
    },
  },
  apis: ["./app/api/users/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export async function GET() {
  return Response.json(swaggerSpec);
}