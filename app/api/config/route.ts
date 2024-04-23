export async function GET() {
    const res = ({ 
    myKey: process.env.API_KEY
    }); 
    return Response.json(res);   
    }

export const fetchConfig = async () => {
    const res = await fetch("/api/config"); 
    const data = await res.json(); 
    return data    
}; 
