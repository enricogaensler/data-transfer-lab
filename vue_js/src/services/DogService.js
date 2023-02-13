export async function getAllDogs() {

    const response = await fetch('/api/dogs/');
    return await response.json();
}