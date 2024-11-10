// lib/cloudinaryLoader.js
export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    const params = [`w_${width}`];
    if (quality) {
      params.push(`q_${quality}`);
    }
    const paramsString = params.join(',');
    return `https://res.cloudinary.com/dpmtz8b5x/image/upload/${paramsString}/${src}`;
  }
  