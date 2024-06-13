const FeatureBox = ({ number, title, description }) => (
  <div className="box zoomin bg-[#141B22] rounded-lg p-6  text-center min-w-[310px] mb-4 md:min-w-[200px]">
    <div className="text-6xl font-bold text-green-600 opacity-40 ">
      {number}
    </div>
    <div className="text-2xl leading-8 font-semibold mb-3">{title}</div>
    <div className="text-gray-300 text-center poppins text-lg leading-7 p-[30px]">
      {description}
    </div>
  </div>
);

export default FeatureBox;
