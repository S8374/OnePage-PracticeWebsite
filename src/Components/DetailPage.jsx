import { useLoaderData } from "react-router-dom";

const DetailPage = () => { 
    const data = useLoaderData()
    console.log('deta',data);
    return (
        <div>
              <h1>Dteails Page</h1>
        </div>
    );
};

export default DetailPage;