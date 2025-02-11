import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://blst-pojj.onrender.com/forward-requests',
'https://blst-2ud6.onrender.com/forward-requests',
'https://blst-70ef.onrender.com/forward-requests',
'https://blst-w1ig.onrender.com/forward-requests',
'https://blst-o7ps.onrender.com/forward-requests',
'https://blst-glg2.onrender.com/forward-requests',
'https://blst-ofb8.onrender.com/forward-requests',
'https://blst-3gut.onrender.com/forward-requests',
'https://blst-sg73.onrender.com/forward-requests',
'https://blst-g8oe.onrender.com/forward-requests',
'https://blst-eaif.onrender.com/forward-requests',
'https://blst-7erd.onrender.com/forward-requests',
'https://blst-ll4c.onrender.com/forward-requests',
'https://blst-j57e.onrender.com/forward-requests',
'https://blst-d8g0.onrender.com/forward-requests',
'https://blst-adsm.onrender.com/forward-requests',
'https://blst-j7o8.onrender.com/forward-requests',
'https://blst-z1nj.onrender.com/forward-requests',
'https://blst-gn2n.onrender.com/forward-requests',
'https://blst-04mv.onrender.com/forward-requests',
];

app.post('/forward-requests', (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).send('Access token is required');
  }

  const requests = finalServers.flatMap(url =>
    Array.from({ length: 20 }).map(() =>
      axios.post(url, { accessToken })
        .catch(() => {}) 
    )
  );

  Promise.all(requests);

  res.status(200).send('Requests forwarded by sub distributor');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sub distributor server listening on port ${port}`);
});
