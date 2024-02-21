import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const getUserList: (req: NextApiRequest, res: NextApiResponse) => void = async (req, res) => {
  await axios
    .get(`${process.env.NEXT_API_BASE_URL}/users/`)
    .then((response) => {
      res.status(200).json({ data: response.data });
    })
    .catch((e) => {
      console.log(e);
      throw e.error;
    });
};

export default getUserList;
