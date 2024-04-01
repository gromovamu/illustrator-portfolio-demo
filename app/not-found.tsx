import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container">
      <div className="in-screen-img">
        <Image 
          fill
          priority={true}
          src='img/main/error404.svg'
          alt='404| Страница не найдена' />
      </div>
    </div>
  );
}