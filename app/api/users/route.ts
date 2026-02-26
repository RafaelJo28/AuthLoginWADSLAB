// app/api/users/route.ts

// Dummy hardcoded data
let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com"
  }
];

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: Success
 */
export async function GET() {
  try {
    return Response.json({
      success: true,
      message: "Users retrieved successfully",
      data: users
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Error retrieving users"
    }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create new user
 *     description: Add a new user to the list
 *     responses:
 *       201:
 *         description: User created successfully
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email
    };

    users.push(newUser);

    return Response.json({
      success: true,
      message: "User created successfully",
      data: newUser
    }, { status: 201 });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Error creating user"
    }, { status: 500 });
  }
}