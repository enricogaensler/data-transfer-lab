export async function getAllUnicorns() {

    const response = await fetch('/api/unicorns/');
    return await response.json();
}