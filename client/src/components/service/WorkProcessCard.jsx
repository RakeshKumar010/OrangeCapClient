 

const WorkProcessCard = ({ value }) => {
  const { id, title, description } = value;
  return (
    <div>
      <div className="relative whitespace-normal rounded-[5px] cursor-pointer group p-6 bg-gray-700  text-gray-300 lg:p-10">
        <div className="flex z-[1] flex-col relative  gap-5">
          <div className="relative flex-none">
            <span className="absolute -top-3 inline-block h-16 w-16 rounded-full bg-logoColor"></span>
            <span className="relative -left-3 top-3 z-1 text-white">
              <svg
                width="65"
                height="66"
                viewBox="0 0 65 66"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27.6443 63.3015C27.2207 63.1202 26.8714 62.8003 26.6536 62.3943C26.4359 61.9883 26.3626 61.5203 26.4458 61.0672L30.0615 41.1203H12.1865C11.8135 41.1211 11.4475 41.0191 11.1286 40.8256C10.8097 40.6321 10.5502 40.3546 10.3786 40.0234C10.2215 39.7023 10.1519 39.3453 10.1768 38.9887C10.2018 38.632 10.3205 38.2883 10.5208 37.9922L34.8958 3.4609C35.1648 3.08207 35.5554 2.80688 36.0027 2.6812C36.4499 2.55553 36.9268 2.58697 37.3536 2.77028C37.7693 2.94147 38.1165 3.24571 38.3407 3.63535C38.5649 4.02498 38.6536 4.47799 38.5927 4.9234L34.9365 24.8703H52.8115C53.1845 24.8695 53.5505 24.9714 53.8693 25.1649C54.1882 25.3584 54.4477 25.636 54.6193 25.9672C54.7764 26.2883 54.846 26.6452 54.8211 27.0019C54.7961 27.3585 54.6775 27.7023 54.4771 27.9984L30.1021 62.5297C29.8448 62.9226 29.4593 63.2143 29.0112 63.3551C28.5631 63.4958 28.08 63.4769 27.6443 63.3015ZM16.1068 37.0578H32.499C32.7974 37.0573 33.0922 37.1226 33.3626 37.249C33.6329 37.3753 33.872 37.5597 34.063 37.789C34.2516 38.0186 34.3875 38.2867 34.4612 38.5745C34.5349 38.8623 34.5446 39.1627 34.4896 39.4547L32.0724 52.739L48.8911 28.9328H32.499C32.2005 28.9333 31.9057 28.868 31.6354 28.7416C31.365 28.6152 31.1259 28.4308 30.9349 28.2015C30.7463 27.972 30.6104 27.7039 30.5367 27.4161C30.463 27.1283 30.4533 26.8278 30.5083 26.5359L32.9255 13.2515L16.1068 37.0578Z"></path>
              </svg>
            </span>
          </div>
          <h3 className="md:text-xl text-lg font-bold  ">{title}</h3>
        </div>
        <p className="mt-6 z-[1] relative">{description}</p>

        <span className="absolute top-5 right-5 z-[1] text-[68px] font-bold text-white/10">
          {id}
        </span>
        <div className="absolute bg-gradient-to-t transition-all duration-700   from-logoColor/50 group-hover:h-full h-2 bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
};

export default WorkProcessCard;
