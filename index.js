import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://blst-pojj.onrender.com',
'https://blst-2ud6.onrender.com',
'https://blst-70ef.onrender.com',
'https://blst-w1ig.onrender.com',
'https://blst-o7ps.onrender.com',
'https://blst-glg2.onrender.com',
'https://blst-ofb8.onrender.com',
'https://blst-3gut.onrender.com',
'https://blst-sg73.onrender.com',
'https://blst-g8oe.onrender.com',
'https://blst-eaif.onrender.com',
'https://blst-7erd.onrender.com',
'https://blst-ll4c.onrender.com',
'https://blst-j57e.onrender.com',
'https://blst-d8g0.onrender.com',
'https://blst-adsm.onrender.com',
'https://blst-j7o8.onrender.com',
'https://blst-z1nj.onrender.com',
'https://blst-gn2n.onrender.com',
'https://blst-04mv.onrender.com',
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
