BigQuery Integration for Nest.js Projects

This README.md guides you through setting up and using Google BigQuery for data storage and querying within your Nest.js application. BigQuery is a powerful, scalable, and serverless data warehouse that seamlessly integrates with Google Cloud Platform (GCP).

## Prerequisites

- A Nest.js project 
- A Google Cloud Platform (GCP) project ([Create Project](https://developers.google.com/workspace/guides/create-project))
- The Google Cloud SDK installed and configured ([Install SDK](https://cloud.google.com/sdk/docs/install))

## 1. Project Setup

### 1.1. Create a Service Account Key

1. In the GCP Console, navigate to **IAM & Admin -> Service Accounts**.
2. Click **Create Service Account**.
3. Give your service account a descriptive name (e.g., `nest-bigquery-service-account`).
4. Grant it the **BigQuery Data Editor** role to enable data manipulation.
5. Click **Create** and download the JSON key file (e.g., `nest-bigquery-key.json`). Store it securely.

### 1.2. Install Required Packages

In your Nest.js project, install the `@google-cloud/bigquery` package using npm or yarn:

```bash
npm install @google-cloud/bigquery
```

2. Configuration

2.1. Create a BigQuery Client

In a Nest.js service or module, import the BigQuery class and create a client instance using the downloaded JSON key file path:

```typescript
import { Injectable } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';

@Injectable()
export class BigQueryService {
  private readonly bigquery: BigQuery;

  constructor() {
    this.bigquery = new BigQuery({
      keyFilename: 'path/to/nest-bigquery-key.json', // Replace with your key file path
    });
  }

  // ... BigQuery operations ...
}
```

### 2.2. (Optional) Environment Variables

For improved security and flexibility, consider storing BigQuery project ID and dataset ID as environment variables:

```bash
export BIGQUERY_PROJECT_ID=your-project-id
export BIGQUERY_DATASET_ID=your-dataset-id
```
Access them in your Nest.js code using process.env:

```typescript
const projectId = process.env.BIGQUERY_PROJECT_ID;

const datasetId = process.env.BIGQUERY_DATASET_ID;
```
