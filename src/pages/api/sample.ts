import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'GET'){
        res.status(200).json({name: 'chan'});
    }else{
        res.status(404).json({error: 'page not found'});
    }
}
