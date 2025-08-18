import { type Package, type InsertPackage, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Package tracking
  getPackageByTrackingId(trackingId: string): Promise<Package | undefined>;
  createPackage(packageData: InsertPackage): Promise<Package>;
  updatePackageStatus(trackingId: string, status: string, location: string, description: string): Promise<Package | undefined>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private packages: Map<string, Package>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.packages = new Map();
    this.contactSubmissions = new Map();
    
    // Initialize with sample tracking data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const samplePackage: Package = {
      id: randomUUID(),
      trackingId: "AVR123456789",
      status: "in_transit",
      senderName: "John's Electronics Store",
      recipientName: "Sarah Johnson",
      recipientPhone: "+234 806 123 4567",
      pickupLocation: "Lagos, Victoria Island",
      deliveryLocation: "Abuja, Central Area",
      currentLocation: "En route to Abuja",
      estimatedDelivery: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      updatedAt: new Date(),
      trackingHistory: [
        {
          status: "picked_up",
          location: "Lagos, Victoria Island",
          timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
          description: "Package picked up from sender"
        },
        {
          status: "in_warehouse",
          location: "Lagos Distribution Center",
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
          description: "Package processed at distribution center"
        },
        {
          status: "in_transit",
          location: "En route to Abuja",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          description: "Package dispatched for delivery"
        }
      ]
    };
    
    this.packages.set(samplePackage.trackingId, samplePackage);
  }

  async getPackageByTrackingId(trackingId: string): Promise<Package | undefined> {
    return this.packages.get(trackingId.toUpperCase());
  }

  async createPackage(packageData: InsertPackage): Promise<Package> {
    const id = randomUUID();
    const now = new Date();
    const newPackage: Package = {
      ...packageData,
      id,
      createdAt: now,
      updatedAt: now,
      trackingHistory: packageData.trackingHistory || [] as Array<{
        status: string;
        location: string;
        timestamp: string;
        description: string;
      }>
    };
    this.packages.set(newPackage.trackingId, newPackage);
    return newPackage;
  }

  async updatePackageStatus(trackingId: string, status: string, location: string, description: string): Promise<Package | undefined> {
    const existingPackage = this.packages.get(trackingId.toUpperCase());
    if (!existingPackage) return undefined;

    const now = new Date();
    const updatedPackage: Package = {
      ...existingPackage,
      status,
      currentLocation: location,
      updatedAt: now,
      trackingHistory: [
        ...(existingPackage.trackingHistory || []),
        {
          status,
          location,
          timestamp: now.toISOString(),
          description
        }
      ]
    };

    this.packages.set(trackingId.toUpperCase(), updatedPackage);
    return updatedPackage;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
}

export const storage = new MemStorage();
