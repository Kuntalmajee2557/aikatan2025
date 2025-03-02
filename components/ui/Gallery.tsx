// components/Gallery.tsx
import Image from "next/image";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg border border-gray-700 dark:border-gray-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;