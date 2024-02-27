export const getGifs = async( category ) => {

    const key = 'FeewkMeikN9qdDndZq6wTI992o3UtdW9';
    const limit = 10;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${ category }&limit=${ limit }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height_small.url
    }));
    
    return gifs;
}