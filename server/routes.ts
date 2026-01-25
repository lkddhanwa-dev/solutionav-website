import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/enquiries", async (req, res) => {
    try {
      const parsed = insertEnquirySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error });
      }
      const enquiry = await storage.createEnquiry(parsed.data);
      res.json(enquiry);
    } catch (error) {
      res.status(500).json({ error: "Failed to create enquiry" });
    }
  });

  return httpServer;
}
