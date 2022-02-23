const HeroImage = () => {
  return (
    <div className='overflow-hidden rounded-full border-4 border-gray-800 hover:border-indigo-400'>
      <video
        autoPlay
        loop
        muted
        width={300}
        height={300}
        src='../../../videos/uglykiss.webm'
        className='rounded-full'
      ></video>
    </div>
  );
};

export default HeroImage;
