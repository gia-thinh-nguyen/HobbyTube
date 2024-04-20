export async function GET() {
    const res = ({ 
    myKey: process.env.API_KEY
    }); 
    return Response.json(res);   
    }