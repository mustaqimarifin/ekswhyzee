const HeroImage = () => {
  return (
    <div className=''>
      <video
        autoPlay
        loop
        muted
        width={300}
        height={300}
        src='../../../videos/xyz2.webm'
        className='rounded-full border-2 border-gray-700 transition duration-300 dark:border-gray-200 hover:border-16'
      ></video>
    </div>
  );
};

export default HeroImage;
