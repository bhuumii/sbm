/** import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
}); **/

// sanity/lib/client.ts
import { createClient } from "next-sanity";

// Use hardcoded values or environment variables - DON'T import from CLI config
const projectId = "woyj1v91"; // From your sanity.cli.ts
const dataset = "production";   // From your sanity.cli.ts
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-07-28';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production only
  // token: process.env.SANITY_API_TOKEN, // Add if you need authenticated reads
});
