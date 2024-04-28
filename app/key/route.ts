export async function GET() {
    const res = ({ 
        googleKey: process.env.API_KEY,
        hygraphKey: process.env.HYGRAPH_KEY,
        hygraphToken: process.env.HYGRAPH_TOKEN,
    }); 
    return Response.json(res);   
    }

