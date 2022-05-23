import { NextResponse } from 'next/server';
import { default as jwt } from 'jsonwebtoken';
import { secret } from '../../../../config';

export default function (req, res, next) {
  console.log('middleware');
  if (req.method === 'OPTIONS') NextResponse.next();
  try {
    // req.headers.autorization.split(' ')[1];
    // if (!token) {
    //   return res.status(400).json({ message: 'The user is not logged in' });
    // };
    // const decodedData = jwt.verify(token, secret);
    // req.user = decodedData;
    NextResponse.next();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: 'The user is not logged in' });
  };
};
