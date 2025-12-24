export async function getUserApi(id: number): Promise<{ id: number; name: string; email: string; }> {
    console.log(`Fetched user with id: ${id}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (id > 10) {
        throw new Error('User not found');
    }
    
    return {
        id,
        name: `John Doe ${id}`,
        email: `john.doe${id}@example.com`
    }
}