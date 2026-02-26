// app/api/users/[id]/route.ts

// Same dummy data (must match route.ts)
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
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a single user using their ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: User not found
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return Response.json({
      success: false,
      message: "User not found"
    }, { status: 404 });
  }

  return Response.json({
    success: true,
    data: user
  });
}

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user
 *     description: Update an existing user
 */
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await request.json();

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return Response.json({
      success: false,
      message: "User not found"
    }, { status: 404 });
  }

  users[index] = {
    ...users[index],
    name: body.name ?? users[index].name,
    email: body.email ?? users[index].email
  };

  return Response.json({
    success: true,
    message: "User updated successfully",
    data: users[index]
  });
}

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 *     description: Remove a user by ID
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return Response.json({
      success: false,
      message: "User not found"
    }, { status: 404 });
  }

  const deletedUser = users.splice(index, 1);

  return Response.json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser[0]
  });
}