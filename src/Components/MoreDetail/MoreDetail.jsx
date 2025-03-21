import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const MoreDetail = () => {
    const nn = useLoaderData() ;
    const {Detailid} = useParams() ;
     const data = nn.posts.find(post => post.id == Detailid)
     console.log(data) ;
    const nav = useNavigate() ;
    const handelBack =()=>{
        nav(-1)
    }
    return (
        <div className="flex justify-center">  
            
          
            <div
  className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
>
  <div>
    <h1 className="text-[2em] font-medium">Member Numbers : {data.id} </h1>
    <p className="text-[0.85em]">
     {data.description}
    </p>
  </div>

  <button onClick={handelBack}
    className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
  ><svg
      className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
      stroke="currentColor"
      stroke-width="1"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p>Back</p>
    
  </button>
          </div>

        </div>
    );
};

export default MoreDetail;