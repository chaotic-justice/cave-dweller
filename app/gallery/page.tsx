import Image from "next/image";

const page = () => {
  return (
    <div className="p-4">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://handcraftedfarmers.com/cdn/shop/files/smallnugs.jpg?v=1700320738" />
        <Image
          width={400}
          height={600}
          alt=""
          src="https://handcraftedfarmers.com/cdn/shop/files/smallnugs.jpg?v=1700320738"
        />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
        <img src="https://www.rei.com/media/e8f06f32-bb0c-45b3-baaf-02d0c1984eca" />
      </div>
    </div>
  );
};

export default page;

