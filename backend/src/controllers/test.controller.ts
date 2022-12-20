import { Request, Response } from 'express';

export const testServer = async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'test successful' });
};
