import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const contactUs: (req: NextApiRequest, res: NextApiResponse) => void = async (req, res) => {
  await axios
    .post(`${process.env.NEXT_API_BASE_URL}/users/`, {
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.emailAddress,
      phoneNumber: req?.body?.phoneNumber,
    })
    .then((response) => {
      res.status(200).json({ data: response.data });
    })
    .catch((e) => {
      console.log(e);
      throw e.error;
    });
};

export default contactUs;
