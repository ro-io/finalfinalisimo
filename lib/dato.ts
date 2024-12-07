export async function getData(url: string) {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data; 
}