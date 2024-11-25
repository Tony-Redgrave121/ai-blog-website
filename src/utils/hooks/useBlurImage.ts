import {useState} from "react";
import {encode} from "blurhash";

const useBlurImage = () => {
    const [hashImage, setHashImage] = useState('')

    const getImage = async (searchedImage: string) => {
        const buffer = await fetch(`http://localhost:3000/server/blogs/images/${searchedImage}`)
        return buffer.arrayBuffer()
    }

    const generateImage = async (imageData: ArrayBuffer) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = new Image();
        const blob = new Blob([imageData]);
        img.src = URL.createObjectURL(blob);

        await new Promise((resolve) => (img.onload = resolve));

        canvas.width = img.width;
        canvas.height = img.height;
        context?.drawImage(img, 0, 0);

        const imageDataPixels = context?.getImageData(0, 0, img.width, img.height);
        if (!imageDataPixels) throw new Error('Unable to get image data');

        return {
            width: imageDataPixels.width,
            height: imageDataPixels.height,
            data: imageDataPixels.data,
        };
    }

    const getData = async (searchedImage: string) => {
        const imageBuffer = await getImage(searchedImage)
        const {data, width, height} = await generateImage(imageBuffer)
        const hash = encode(new Uint8ClampedArray(data), width, height, 4, 3)

        console.log(hash)
        setHashImage(hash)
    }

    return {
        hashImage,
        getData
    }
}

export default useBlurImage