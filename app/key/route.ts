export async function GET() {
    const res = ({ 
        googleKey: process.env.API_KEY
    }); 
    return Response.json(res);   
    }

