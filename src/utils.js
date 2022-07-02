const url = 'https://wallhaven.cc/api/v1/w/dpqjwj';

export const fetchBg = async function(){
    const response = await fetch(url)
    const responseJSON = await response.json()
    const data = await responseJSON.data
    const path = data.path
    return path
}