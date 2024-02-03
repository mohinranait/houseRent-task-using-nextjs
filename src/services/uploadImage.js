import { instancePublic } from "@/hooks/useAxiosPublic";

export const singleImage = async (image) => {
    const formImage = new FormData()
    formImage.append('image', image)
    const {data} = await instancePublic.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_BB_API}`, formImage)
    return data.data.display_url;
}


export const uploadMultipleImage = async (selectedFiles) => {
    let imgArr=[]
    const formData = new FormData();
    for (const file of selectedFiles) {
        formData.append('image', file);
        const {data} = await instancePublic.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_BB_API}`, formData)
        imgArr.push(data.data.display_url)
    }
    return imgArr
}