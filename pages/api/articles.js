
const ArticlesAPI = async (req,res) =>{

    if (req.method === 'GET'){

        try {
            const data = await fetch('https://dev.to/api/articles/me/published', {method:'GET', headers:{'api-key':process.env.NEXT_PUBLIC_DEV_TO_ID,'Content-Type': 'application/json'}})
                        .then(res =>res.json())
            
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({message: error})
        }

        
    }

}

export default ArticlesAPI;