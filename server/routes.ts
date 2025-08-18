import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { trackingStatusSchema, insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Package tracking endpoint
  app.get("/api/packages/:trackingId", async (req, res) => {
    try {
      const { trackingId } = req.params;
      const validatedData = trackingStatusSchema.parse({ trackingId });
      
      const packageData = await storage.getPackageByTrackingId(validatedData.trackingId);
      
      if (!packageData) {
        return res.status(404).json({ 
          message: "Package not found. Please check your tracking ID and try again." 
        });
      }
      
      res.json(packageData);
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid tracking ID format" 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ 
        message: "Thank you for your inquiry! We will get back to you within 24 hours.",
        id: submission.id
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Please check all required fields and try again." 
      });
    }
  });

  // Get quote endpoint (alias for contact)
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ 
        message: "Quote request received! Our team will contact you with a detailed proposal within 24 hours.",
        id: submission.id
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Please check all required fields and try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
