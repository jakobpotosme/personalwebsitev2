// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
res.status(200).json([
    {name: 'HecticSoles',
    description: 'Website built for hecticsolesllc.',
    tech: 'React, NodeJs, Netlify'
    },
    {name: 'Connect 4',
    description: 'Connect 4 with Multiplayer functionality.',
    tech: 'Javascript, NodeJs, MongoDB, Heroku'
    },
    {name: 'Side Projects',
    description: 'Simple projects that I built to fix small problems I found everyday',
    tech: '',

    },
   ])
}
