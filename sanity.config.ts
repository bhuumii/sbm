"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// Go to [https://www.sanity.io/docs/api-versioning](https://www.sanity.io/docs/api-versioning) to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "woyj1v91",
  dataset: dataset || "production",

  schema,
  plugins: [
    structureTool({ 
      structure: (S, context) => {
        return S.list()
          .title('Content Management')
          .items([
           
            orderableDocumentListDeskItem({
              type: 'blogPost',
              title: 'Blog Posts (Reorder Here)',
              S,
              context,
              filter: 'status == "published"',
            }),
            
            S.divider(),
            
           
            ...S.documentTypeListItems().filter(
              (listItem) => !['blogPost'].includes(listItem.getId() || '')
            ),
          ]);
      }
    }),
   
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
