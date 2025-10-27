const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
    {
        [1,2,3,4,5,6,7,8,9,10,11,12].map((id, index) => {
            return (
                <div className="shimmer-card" key={index}></div> 
            )
        })
    }
    </div>
  );
};

export default ShimmerUI;
