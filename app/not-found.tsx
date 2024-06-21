import ExportedImage from "next-image-export-optimizer";

export default function NotFound() {
  return (
    <div className="container">
      <div className="in-screen-img">
        <ExportedImage 
          fill
          unoptimized
          priority={true}
          src={`${process.env.NEXT_PUBLIC_MAIN_PATH}/error404.svg`}
          alt='404| Страница не найдена' />
      </div>
    </div>
  );
}