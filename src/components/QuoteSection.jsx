

const QuoteSection = () => {
    return (
      <div className="relative bg-white p-10 md:p-14  md:w-1/2 mx-auto text-center">
        
        <div className="absolute top-[-8px] md:left-[-20px] text-yellow text-8xl font-bold">
          &ldquo;
        </div>
  
       
        <p className="md:text-lg text-gray leading-relaxed">
          InstamediRx is dedicated to connecting patients with trusted medical
          professionals, ensuring fast, secure, and reliable healthcare services
          at your fingertips. Whether it’s an initial consultation or ordering
          medications,we are here to take care of your health.
        </p>
  
     
        <div className="absolute bottom-[-20px] right-[34px] md:right-[-20px] text-yellow text-8xl font-bold">
          &rdquo;
        </div>
      </div>
    );
  };
  
  export default QuoteSection;
  