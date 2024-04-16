import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg" height={100} width={100} alt="" /> */}

      <Image src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg" height={500} width={500} alt="" />
      Hello Coders.....
    </div>
  );
}
