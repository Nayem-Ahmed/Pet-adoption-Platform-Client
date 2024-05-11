  
const SwiperCard = ({cardinfo}) => {
    const {img,heading,description} = cardinfo;
    return (
        <div className="card  h-[440px] md:w-64 text-black bg-white  shadow-sm border rounded-sm mb-5">
            <div className="card-body ">
                <img className='w-32 rounded-full' src={img} alt="" />
                <h2 className="card-title text-red-500">{heading}</h2>
                <p>{description}</p>
                 
            </div>
        </div>
    );
};

export default SwiperCard;