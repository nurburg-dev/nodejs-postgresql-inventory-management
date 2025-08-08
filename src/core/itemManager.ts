import { Request, Response } from "express";
import {
  CreateItemRequest,
  TemporarilyBlockInventoryRequest,
  PermanentlyBlockInventory,
} from "../models/Item";
import { pool } from "../db/connection";

export const getItemById = async (req: Request, res: Response) => {
  res.send(200);
};

export const createItem = async (req: Request, res: Response) => {
  res.send(200);
};

export const temporarilyBlockInventory = async (
  req: Request,
  res: Response
) => {
  res.send(200);
};

export const permanentlyBlockInventory = async (
  req: Request,
  res: Response
) => {
  res.send(200);
};

export const getTopItemsByCategory = async (req: Request, res: Response) => {
  res.send(200);
};

export const cleanupExpiredBlocks = async () => {
  res.send(200);
};

export const cleanupExpiredBlocksAPI = async (req: Request, res: Response) => {
  res.send(200);
};
